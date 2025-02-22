const Procedure = ({ userId }: { userId: string }) => {
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-2xl font-bold mb-4">
        How to Add a Webhook for Your GitHub Project
      </h1>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Step 1: Navigate to Your GitHub Repository
        </h2>
        <p className="text-gray-700">
          Log in to GitHub and go to the repository where you want to set up the
          webhook.
        </p>
        <p className="mt-2 text-sm text-blue-500 underline">
          Example: https://github.com/your-username/your-repo
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Step 2: Open the Repository Settings
        </h2>
        <p className="text-gray-700">
          In your repository, click on the{" "}
          <span className="font-mono bg-gray-100 p-1 rounded">Settings</span>{" "}
          tab located near the top of the page.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Step 3: Add a New Webhook
        </h2>
        <p className="text-gray-700">
          From the settings sidebar, select{" "}
          <span className="font-mono bg-gray-100 p-1 rounded">Webhooks</span>.
          Click on the{" "}
          <span className="font-mono bg-gray-100 p-1 rounded">Add webhook</span>{" "}
          button.
        </p>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Step 4: Configure Your Webhook
        </h2>
        <ul className="list-disc ml-6 text-gray-700">
          <li className="mb-1">
            <strong>Payload URL:</strong> Enter the URL where your PR review bot
            is hosted ({" "}
            <span className="font-mono bg-gray-100 p-1 rounded">
              {`${process.env.NEXT_PUBLIC_SERVER_URL}/github/webhook?userId=${userId}`}
            </span>
            ).
          </li>
          <li className="mb-1">
            <strong>Content type:</strong> Select{" "}
            <span className="font-mono bg-gray-100 p-1 rounded">
              application/json
            </span>
            .
          </li>

          <li className="mb-1">
            <strong>Let me select individual events:</strong> Choose{" "}
            <span className="font-mono bg-gray-100 p-1 rounded">
              Pull requests
            </span>{" "}
            <span className="font-mono bg-gray-100 p-1 rounded">
              Pull request reviews
            </span>{" "}
            to ensure your bot is triggered on PR events.
          </li>
          <li>
            <strong>Active:</strong> Ensure the webhook is active by checking
            the corresponding box.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Step 5: Save the Webhook</h2>
        <p className="text-gray-700">
          Once you’ve configured the webhook, click on the{" "}
          <span className="font-mono bg-gray-100 p-1 rounded">Add webhook</span>{" "}
          button at the bottom of the form.
        </p>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-2">Final Notes</h2>
        <p className="text-gray-700">
          Your PR review bot should now be ready to automatically respond to
          pull requests on your repository. If any issues arise, refer to your
          bot’s documentation or GitHub’s webhook troubleshooting guide.
        </p>
      </div>
    </div>
  );
};

export default Procedure;
