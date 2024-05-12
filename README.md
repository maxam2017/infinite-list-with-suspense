# infinite-list-with-suspense

This is a simple example of how to create an infinite list with React Suspense.
I'm not sure if this is the best way to do it, but it works.
If you have any suggestions, please let me know.

## Explanation

Before React introduced "the Suspense for Data Fetching", implementing infinite lists involved triggering data fetching as the user scrolled to the bottom of the list. Upon fetching data, it was appended to the list, and the state was updated accordingly.

However, with Suspense, we can bind the data fetching to the component and let React handle the data fetching for us.
