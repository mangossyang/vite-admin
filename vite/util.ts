
export function parseEnv(env: Record<string, any>): ViteEnv {

    const envs = JSON.parse(JSON.stringify(env))
    Object.entries(env).forEach(([key, value]) => {
        if (value === 'true' || value === 'false') {
            envs[key] = value === 'true' ? true : false
        }
        if (/^\d+$/.test(value)) {
            envs[key] = parseInt(value)
        }
    })
    return envs
}
