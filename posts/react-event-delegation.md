---
title: "[WIP]You may not know about React Event Delegation yet"
date: "2020-08-11"
---

React `v17.0-rc` has just been released yesterday. This release is quite interesting as its claim: "No new features". We can take a cool breath to hear that. We don't need to migrate our project from the legacy API to the newer API. Change from Class Component to Functional Component or move from old lifecycle hooks method to the new React hooks are quite painful in the past. However, the release doc still has some interesting notes. One of them is [Changes to Event Delegation](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#changes-to-event-delegation), this blog will remind about the event propagation then show some facts and reveal the unclear part about React Event Delegation.

## What is Event Bubbling?
![Event Bubbling](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/05/1495534508eventflow.svg)

Event Bubbling is the event starts from the **deepest element or target element to its parents, then all its ancestors which are on the way to bottom to top.** At present, all the modern browsers have event bubbling as the default way of event flow.

In the figure above, when we click on the `td` tag with the content: "Over the River, Charlie". The event is not only fire at the clicked `td` but also for the parent `tr` and going all the way up through all the element's ancestors, before terminating at the `window` object. That is Event Bubbling. 
You can check it yourself by using this example code. Suggest you have an HTML doc like this:
 ```html
<html>
    <head>Event Bubbling Example</head>
    <body>
        <table>
            <thead>
                <tr>
                    <td>Project</td>
                    <td>Author</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Shady Grove</td>
                    <td>Aeolian</td>
                </tr>
                <tr>
                    <td id="second-item">Over the River, Charlie</td>
                    <td>Dorian</td>
                </tr>
            </tbody>
        </table>
    </body>
    <script>/* the script part is below */</script>
</html>
```

And the script part:

```javascript
const body = document.getElementsByTagName('body')[0]
const secondTd = document.getElementById('second-item')

body.addEventListener('click', () => {
    console.log('body clicked')
})

secondTd.addEventListener('click', () => {
    console.log('second-item clicked')
})
        
```
Now, if you open the browser and click the cell with id `second-item` in the table, you can see in the `Dev Tools console` the following message in order:
1. `second-item clicked`
2. `body clicked`

See the [full example here](/public/event-bubbling.html)
 
### Stop event bubbling
But what if you don't want the event bubbling? In the above example, what if we have a requirement that whenever the `#second-item` click, the event should just stay there without bubble to the above level. We can achieve this by modify the `secondTd` listener:
```javascript
secondTd.addEventListener('click', (event) => {
    event.stopPropagation() // <-- add this line
    console.log('second-item clicked')
})
```

Now, if you open the browser and click the `#second-item`, you wouldn't see the `body clicked` message anymore. If you click the other part of the HTML doc, `body clicked` will still show up.

See the [full example here](/public/event-bubbling-stop-propagation.html)

We have just remind about `Event Bubbling`, the nature of the browser DOM. Now we would back to React to see the differents.   

## React Event Delegation

### Fact #1: You cannot event.stopPropagation as expected in React
Suggest we have this minimal React App.
`index.jsx`
```jsx
// index.jsx
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

document.addEventListener('click', () => {
    console.log('Document clicked')
})

ReactDOM.render(<App />, document.getElementById('app'))
```

`App.jsx`
```jsx
// App.jsx
import React from 'react';
import './App.css';

const onSecondItemClickHandler = () => {
  event.stopPropagation()
  console.log('App Btn clicked')
}

const onTableClickHandler = () => {
  console.log('Table clicked')
}

function App() {
  return (
    <div className="App">
      <table onClick={onTableClickHandler}>
        <thead>
        <tr>
          <td>Project</td>
          <td>Author</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Shady Grove</td>
          <td>Aeolian</td>
        </tr>
        <tr>
          <td id="second-item" onClick={onSecondItemClickHandler}>
            Over the River, Charlie
          </td>
          <td>Dorian</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
```

View the [full example project here](../demo/react-event-delegation)

Nothing special right?, just another version of the above example but written in React App. But now, if you open the DevTools console then click the button on the screen, you can see the messages in order:
1. `Document clicked`
2. `App Btn clicked`
3. `Table clicked`

Oops, what's wrong here? Let me check. 
- First, we have already stop the event propagation right? Why `Document clicked` still stay there?
- Second, even `event.stopPropagation` is not working but the order is totally wrong. The correct order should be `App Btn clicked` then `Table clicked` then `Document clicked` where is our `Event Bubbling`?

The answer is because of the `React Event Delegation`. I have not been cared about it until the release of `React17rc` recently. Here is the explaination about `React Event Delegation` from `ReactJS` web page:
 
> React attaches one handler per event type directly at the document node. This is called event delegation. In addition to its performance benefits on large application trees, it also makes it easier to add new features like replaying events.

> React has been doing event delegation automatically since its first release. When a DOM event fires on the document, React figures out which component to call, and then the React event “bubbles” upwards through your components. But behind the scenes, the native event has already bubbled up to the document level, where React installs its event handlers.

So the short answer is, in React, first the event would fires on the document no matter what you do with the event in the node, in our case it is `event.stopPropagation` then the event would come back to the node then bubble up like usual. So, nothing is broken here. Event bubbling still works, just React add the concept of `React Event delegation` for the performance benefits like they have claimed.

Oh yes, it's interesting but what does it matter? I guess that you would have the same question. 

### Fact #2. React Event Delegation could go wrong. 
Due to the abnormal behavior of `React`, it could confuse the developers using `React.` There are several issues that have been reported by the community:
- [Global event handlers on document.body (or other containing element) run BEFORE react event handlers](https://github.com/facebook/react/issues/7094)
- [Native event.stopPropagation outside of React root cuts out React events](https://github.com/facebook/react/issues/8693)
- [Event listener attached to `document` will still be called after calling `event.stopPropagation()`](https://github.com/facebook/react/issues/12518)
- [Clean up top-level event listeners after unmounting all roots](https://github.com/facebook/react/issues/7128)

So most of the issues related to the confusion of the React's users about event handling like the above example. Even worse, it could be lead to memory leak if we use `<iframe>` that have event listener inside that. I will create another topic about this problem as it can be long.

Finally, to mitigate this problem, the newest release `React17rc` has a changes:
> In React 17, React will no longer attach event handlers at the document level. Instead, it will attach them to the root DOM container into which your React tree is rendered

> In React 16 and earlier, React would do document.addEventListener() for most events. React 17 will call rootNode.addEventListener() under the hood instead.



  

## References

- [Vaibhav Sharma: Event bubling and event capturing - Dec 24,2017](https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)
- [Giulio Mainardi: What Is Event Bubbling in JavaScript? Event Propagation Explained - May 24,2017](https://www.sitepoint.com/event-bubbling-javascript/)




