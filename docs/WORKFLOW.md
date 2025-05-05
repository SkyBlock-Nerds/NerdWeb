# General workflow:
1. You push your changes to your fork.
2. You make a PR to the NerdWeb repo dev branch.
   - Your PR should include things like:
     - An explanation of what you added.
     - Screenshots of what you added, showing it working.
     - A fully working feature without any obvious bugs.
3. Linting is automatically done if relevant files have been changed.
4. A maintainer reviews the changes made.
    - The changes are approved:
      - Continue to 5.
    - There are changes the maintainer would like to see.
      - You are asked to make another commit which adheres to all the changes requested by the maintainer.
    - Your changes are outright denied.
      - Sadly we fundamentally don't think your changes fit the project goal and thus won't be merging your changes.
5. The Changes will be merged into the dev branch.
6. When everything is ready for another release:
   1. All changes will be merged into main.
   2. An automatic deployment will commence.
   3. If the above succeeds the new version of the app will now be live!