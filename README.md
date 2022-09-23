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
2. I still don't understand the purpose of useCallback() and its dependencies. The tutorial framed it in a way that makes me feel like its entire purpose is to not make ESLint angry. The explanation on the official website makes sense, but I couldn't make the connection of how it makes the dependencies not required.
3. Why do we need ESLint? If ESLint warnings do not affect the program from running properly, can we ignore them?
4. Where does setState() actually execute? I understand React might bundle the hooks and execute them at later or more convenient times. However, sometimes I might want to access the changed state and the state will remain unchanged, requiring extra workarounds.
5. I spent quite some time fixing an inconvenience regarding the URL. When selecting a repository from the Repos page, the render starts rendering /USER/REPO, then does an extra step switching to /USER/REPO/#. It again doesn't change the behavior, but sometimes causes the Content page to load extra long or for variables to behave unpredictably. I ultimately found another approach in RouterLink that fixed the issue, but I have no idea why so. 