# Token Leak Demo

This repository demonstrates a security vulnerability where GitHub Actions tokens can be leaked in workflow logs.

## Warning

This repository is for educational purposes only. The workflow intentionally leaks a GitHub token to demonstrate how tokens can be exposed in logs and subsequently stolen.

## Workflow

The repository contains a GitHub Actions workflow that:

1. Prints the GitHub token to logs (BAD PRACTICE)
2. Runs some example tasks
3. Prints repository information

## Security Implications

In a real-world scenario, exposing tokens in logs can lead to:

1. Unauthorized code pushes
2. Bypassing branch protection rules
3. Data exfiltration
4. Supply chain attacks

## Prevention

To prevent token leakage:

1. Never print tokens or secrets to logs
2. Use the minimum required permissions for GitHub tokens
3. Implement branch protection with required reviews
4. Enable secret scanning
