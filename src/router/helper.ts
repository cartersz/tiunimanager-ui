import { History, Location } from 'history'
import { useHistory, useLocation } from 'react-router-dom'

export type RouteState = {
  from: string
}

export type HistoryWithState = History<RouteState>
export type LocationWithState = Location<RouteState>
export type Redirector = (
  session: string,
  location: LocationWithState
) => string | false | null | undefined

export function useHistoryWithState(): HistoryWithState {
  const history = useHistory<RouteState>()
  if (!history.location.state || !history.location.state.from)
    history.location.state = {
      from: '/',
    }
  return history
}

export function useLocationWithState(): LocationWithState {
  const location = useLocation<RouteState>()
  if (!location.state || !location.state.from)
    location.state = {
      from: '/',
    }
  return location
}