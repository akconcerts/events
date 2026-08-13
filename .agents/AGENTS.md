# AK Concerts Project Rules

## Date & Timezone Standard (America/Anchorage)
- `America/Anchorage` is the single source of truth across the entire AK Concerts codebase.
- NEVER use naive `new Date()` or local machine timezone parsing for event dates or filtering.
- ALWAYS import and use `src/utils/date.ts` (`getAlaskaTodayDate()`, `isEventPast()`, `isUpcomingEvent()`, `getTimeMinutes()`, `formatFullTime()`) for all date comparisons, sorting, display, and event status evaluations.
- Event start/end status rules:
  - Events with explicit end times (e.g., "8:00 PM - 11:00 PM") remain active until the end time in Alaska Time.
  - Single start time events (e.g., "8:00 PM") receive a 4-hour event duration buffer before being marked past.
  - The default feed ("Playing Soon") on `/` must ONLY display active and upcoming shows starting from current Alaska Time. Past events must only be shown in `/past/` or when `All Dates` is explicitly selected.
  - The default date filter selection MUST be `Upcoming Shows`.

## Icons & UI Guidelines
- Only use Lucide or Font Awesome icons. Do not use emojis in UI buttons or components.

## Git Authentication
- When running git push/pull/fetch commands, always unset GITHUB_TOKEN to ensure the git command falls back to the macOS Keychain credential helper for the GitHub user "kb907alaska".
- Example command pattern: `env -u GITHUB_TOKEN git push`
