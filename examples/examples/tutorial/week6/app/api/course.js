import {http_get} from "util"
export const get_course = () => {
  return http_get("course")
}
