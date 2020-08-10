---
title: "[WIP]Say goodbye to Redux and Redux Thunks"
date: "2020-08-10"
---

Today, I will introduce you a better way to handle your data fetching and reduce the usage of Redux. 

* This blog post is in progress and not be ready to use *

There are some problems with using Redux such as:
- Too much boilerplate
- Handle `async` request need some extra setup - need `redux thunk`

Here is an example that using the better approach:

```jsx
const Demo = () => {
    return (
        <Fetch
            url={'http://sample.url'}
        >
            {({data, loading, error}) => {
                if (error) {
                    return <Error error={error} />
                }
                if (loading) {
                    return <Loading />
                }
                
                if (data) {
                    return <SampleDataDisplay data={data}/>
                }         
            }}
        </Fetch>    
    )
}
```