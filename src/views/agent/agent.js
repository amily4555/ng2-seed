"use strict";
var Agent = (function () {
    function Agent(agencyId, name, companyName, totalBalance, tenantNum, creditPerTenant) {
        this.agencyId = agencyId;
        this.name = name;
        this.companyName = companyName;
        this.totalBalance = totalBalance;
        this.tenantNum = tenantNum;
        this.creditPerTenant = creditPerTenant;
    }
    return Agent;
}());
exports.Agent = Agent;
//# sourceMappingURL=agent.js.map