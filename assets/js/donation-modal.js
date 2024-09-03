(function (win) {
  const customDomain = 'give.prx.org';
  const modalUrlParams = { egfa: true };
  const donateButtonSelector = '[data-donate-campaign-id]';
  const campaigns = new Map();

  /* Setup our donation button. */
  win.document.querySelectorAll(donateButtonSelector).forEach((elm) => {
    const campaignId = elm.dataset.donateCampaignId;

    campaigns.set(campaignId, {
      campaignId,
      customDomain,
      donation: {
        modal: {
          urlParams: modalUrlParams
        }
      }
    });

    elm.addEventListener('click', (e => {
      e.preventDefault();

      win.eg?.[campaignId]?.donation.modal.open();
    }));
  });

  /* Configure embed props. */
  win.egProps = {
    campaigns: [...campaigns.values()]
  };

  /* Add embed script tag. */
  win.document.body.appendChild(makeEGScript());

  /* Create the embed script */
  function makeEGScript() {
    var egScript = win.document.createElement('script')
    egScript.setAttribute('type', 'text/javascript')
    egScript.setAttribute('async', 'true')
    egScript.setAttribute('src', 'https://sdk.classy.org/embedded-giving.js')
    return egScript
  }
})(window)
