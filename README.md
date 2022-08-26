# Github Repo Search
A search engine of public repositories upon username input. Repositories listed alphabetically and 10 at a time, with more loaded when at the bottom of current list.

## Launch
```
npm run start
```

## Structure
The project is mainly consist of three layers: Rendering, Routing, and Web Content.
1. Rendering
    Rendering current page
2. Routing
    Returning certain components depending on the path.
3. Web Content
    There are three pages in this project: Home, Repo, and Content.
    Home is the search menu that accepts a username.
    Repo is the public repository list of said username.
    Content is the repository selected.

## Questions and Comments
1. Still very unfamiliar with CSS, especially display, flex, and alignment.
2. Still unfamiliar with useCallback() and hook dependencies.
3. The execution of setState in the useState hook.