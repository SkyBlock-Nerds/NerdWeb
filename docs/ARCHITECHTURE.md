## File Structure
```
/src
    main.tsx
      - Contains the routing for the app.
    App.tsx
      - Contains the general layout for the app.
    /components
        - Contains reusable components (and components that are part of the layout).
    /pages
        - Contains the pages of the application.
    /assets
    /hooks
    /api-client
        - Contains all api logic/support.
```

## Notes
- Follow the naming conventions for files and folders.
- Keep components small and focused on a single responsibility.
  - Rather have components be too small than too big.
- No uncommon npm packages.
  - Don't want to have to deal with soon to be EOL (or similar) packages resulting in rewrites later.