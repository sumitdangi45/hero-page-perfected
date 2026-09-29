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

## Project decisions

- Shared site chrome lives in `src/components/site-header.tsx`; routes may omit it while the
  final homepage navigation is pending — one nav source of truth when restored.
- Brand colors are semantic tokens (`--brand`, `--brand-dark`, `--brand-ink`, `--mint`,
  `--mint-deep`) in `src/styles.css`; illustration/mockup styling also lives in the
  `@layer components` block there — never hardcode colors in components.
- Anni site font is Plus Jakarta Sans (body/headings) + Caveat (handwritten doodles),
  loaded via `<link>` in `src/routes/__root.tsx`.
- Portfolio recommendation requests use a public one-shot TanStack server function and the
  Lovable AI Gateway; prompts and credentials stay server-side.
