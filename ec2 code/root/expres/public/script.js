function executeAwsScript() {
    fetch('/publish', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({"hello": "publishing message"}),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to publish message');
        }
      })
      .then((data) => {
        console.log(data.message);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      const awsButton = document.getElementById('awsButton');
      awsButton.addEventListener('click', executeAwsScript);
    });
    