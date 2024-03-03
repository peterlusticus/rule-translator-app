
type Obj = { [key: string]: [key: [key: string] | string] | string }
const config: Obj ={}

export const setConfigValue = (value: any, prop: any) => {
    config[prop] = value
}