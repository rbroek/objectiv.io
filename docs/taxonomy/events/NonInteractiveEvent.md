# NonInteractiveEvent

Non-interactive events are events that are not (directly) triggered by an interaction. 

For example, consider the following flow of events:

  1. Press 'play' button in a video player -> ButtonEvent -> InteractiveEvent
  2. Videoplayer starting playback -> MediaStartEvent -> NonInteractiveEvent

### Parents
- [AbstractEvent](/docs/taxonomy/events/AbstractEvent).

### Requires
- None.