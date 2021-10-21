import { generatePath, ExtractRouteParams } from "react-router"

export const ROUTES = {
  HOME: "/",
  DASHBOARD: "/dashboard",
  LOGINPAGE: "/login",
  SIMPLEFORM: "/simpleform",
  TODO_DETAIL: "/todo/detail/:id",
  TODO_EDIT: "/todo/edit/:id",
  NOT_FOUND: "/notFound",
  ANY: "/*",
}

export type ROUTEKEYS = keyof typeof ROUTES

export type PARTIALROUTEKEYS = keyof Pick<
  typeof ROUTES,
  "TODO_DETAIL" | "TODO_EDIT"
>

/**
 * A helper method to replace parameter placeholders in a string.
 *
 * @example getRoute('/todo/detail/:id', { id: 1 }) will return '/todo/detail/1'
 *
 * @param {string} route The route with optional parameter placeholders, e.g. '/todo/detail/:id'
 * @param {Object} [params] Optional object with key value pairs to replace parameter placeholders from the `route`.
 * @returns {string} resolved route with parameters
 * @throws Will throw a TypeError if provided params and path don’t match
 */
export const getRoute = (
  key: PARTIALROUTEKEYS,
  params: ExtractRouteParams<any>
): string => {
  return generatePath(ROUTES[key], params)
}
