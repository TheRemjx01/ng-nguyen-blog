---
title: "[WIP]You may not know about React Event Delegation yet"
date: "2020-08-11"
---

React `v17.0-rc` has just been released yesterday. This release is quite interesting as its claim: "No new features". We can take a cool breath to hear that. We don't need to migrate our project from the legacy API to the newer API. Change from Class Component to Functional Component or move from old lifecycle hooks method to the new React hooks are quite painful in the past. However, the release doc still has some interesting notes. One of them is [Changes to Event Delegation](https://reactjs.org/blog/2020/08/10/react-v17-rc.html#changes-to-event-delegation), this blog will remind about the event propagation then show some facts and reveal the unclear part about React Event Delegation.

## What is Event Bubbling?
![Event Bubbling](https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2017/05/1495534508eventflow.svg)

Event Bubbling is the event starts from the **deepest element or target element to its parents, then all its ancestors which are on the way to bottom to top.** At present, all the modern browsers have event bubbling as the default way of event flow.

In the figure above, when we click on the `td` tag with the content: "Over the River, Charlie". The event is not only fire at the clicked `td` but also for the parent `tr` and going all the way up through all the element's ancestors, before terminating at the `window` object. 




### Fact #1: You cannot event.stopPropagation in React

## References

- [Vaibhav Sharma: Event bubling and event capturing - Dec 24,2017](https://medium.com/@vsvaibhav2016/event-bubbling-and-event-capturing-in-javascript-6ff38bec30e)
- [Giulio Mainardi: What Is Event Bubbling in JavaScript? Event Propagation Explained - May 24,2017](https://www.sitepoint.com/event-bubbling-javascript/)




