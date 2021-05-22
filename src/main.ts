import * as core from '@actions/core'
import * as github from '@actions/github'

async function run(): Promise<void> {
  try {
    let branch = github.context.payload?.workflow_run?.head_branch

    if (branch) {
      branch = `refs/heads/${branch}`
    } else {
      branch = github.context.ref
    }

    core.setOutput('target-branch', branch)
    core.info(`Setting target branch to ${branch}`)
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
