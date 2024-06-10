const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

// Example project name and funding limit
const DEFAULT_PROJECT_NAME = "Tune Tunnel";
const DEFAULT_FUNDING_LIMIT = 5000; // Example funding limit

module.exports = buildModule("CrowdFundingModule", (m) => {
  //   const projectName = m.getParameter("projectName", DEFAULT_PROJECT_NAME);
  //   const fundingLimit = m.getParameter("fundingLimit", DEFAULT_FUNDING_LIMIT);

  const crowdFunding = m.contract("CrowdFunding", [
    DEFAULT_PROJECT_NAME,
    DEFAULT_FUNDING_LIMIT,
  ]);

  return { crowdFunding };
});
