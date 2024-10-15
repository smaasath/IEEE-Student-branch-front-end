export const EmailValidation = (email) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
        return (true)
    }
    return (false)
};


export const PolicyValidate = (userData, Code) => {
    return userData?.some((userRoleDetail) =>
        userRoleDetail.role?.policies.some(
            (policy) => policy.policyCode === Code
        )
    )
};


