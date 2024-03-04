type Rule = {
    wenn: {
        [key: string]: string | number
    },
    dann: {
        [key: string]: string | number
    }
}

const rule: Rule = { wenn: {}, dann: {} }

export const setRuleValue = (order: boolean, key: string, value: string | number) => {
    if (order) {
        rule.wenn[key] = value
    } else {
        rule.dann[key] = value
    }
    console.log(rule)
}