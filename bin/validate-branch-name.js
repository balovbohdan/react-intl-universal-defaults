const getBranchName = require('current-git-branch');

const SUCCESS_CODE = 0;
const ERROR_CODE = 1;
const BRANCH_NAME_PATTERN = /^(fix|task)\/[a-z0-9-]+/g;

const branchName = getBranchName();

if (!branchName) {
  console.error('Not a git repository!');

  process.exitCode = ERROR_CODE;
} else {
  const isBranchNameValid = BRANCH_NAME_PATTERN.test(branchName);

  if (!isBranchNameValid) {
    console.error(`Invalid branch name: ${branchName}. Pattern: ${BRANCH_NAME_PATTERN}.`);
  }

  process.exitCode = isBranchNameValid ? SUCCESS_CODE : ERROR_CODE;
}
