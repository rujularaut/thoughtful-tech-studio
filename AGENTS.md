<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules
- All editable site copy, services, projects, founders and contact details live in `src/content/site.ts`; pages read from it so content changes never require touching layout code.
- Project inquiries are validated by a shared zod schema (`src/lib/inquiry-schema.ts`) on both client and server, and stored via a public server function using the admin client into `project_inquiries`, which has no anon/authenticated grants — so visitors can submit but never read submissions.
- Case studies use one dynamic route (`/work/$slug`) driven by the `projects` array, so adding a project is a content change.
- Project visuals are labelled concept sketches; real screenshots/photos go through `ImageSlot` `src` props once genuine images exist (brief forbids invented screenshots/results).
