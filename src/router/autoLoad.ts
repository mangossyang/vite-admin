import { RouteRecordRaw } from "vue-router"

const layoutRoutes = [] as RouteRecordRaw[]

const layouts = import.meta.globEager('../layouts/*.vue')
const views = import.meta.globEager('../views/**/*.vue')

const getRouteByModule = (file: string, module: { [key: string]: any }, views: boolean) => {
    views ? file.match(/views\/(.*)\.vue$/) : file.match(/layouts\/(.*)\.vue$/)
    const name = RegExp.$1
    const route = {
        name,
        path: `/${name}`,
        component: module.default
    } as RouteRecordRaw

    return route
}
Object.entries(layouts).forEach(([file, module]) => {
    const route = getRouteByModule(file, module, false)
    route.children = getChildRoute(route)

    layoutRoutes.push(route)
})

function getChildRoute(layoutRoute: RouteRecordRaw) {
    const routes = [] as RouteRecordRaw[]
    Object.entries(views).forEach(([file, module]) => {
        if (file.includes(`/views/${layoutRoute.name as string}`)) {
            const route = getRouteByModule(file, module, true)
            routes.push(route)
        }
    })
    return routes
}


export default layoutRoutes