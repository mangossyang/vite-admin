export default new (class {
    public envs = {} as ImportMetaEnv
    constructor() {
        this.envs = this.genEnvs()
    }
    private genEnvs(): ImportMetaEnv {
        const envs = JSON.parse(JSON.stringify(import.meta.env))
        console.log(envs);

        Object.entries(import.meta.env as Record<string, any>).forEach(([key, value]) => {
            if (value === 'true' || value === 'false') {
                envs[key] = value === 'true' ? true : false
            } else if (/^\d+$/.test(value)) {
                envs[key] = parseInt(value)
            } else if (value == 'null') envs[key] = null
            else if (value == 'undefined') envs[key] = undefined
            else envs[key] = value
        })
        return envs
    }
})()