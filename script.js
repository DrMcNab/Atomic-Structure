window.onload = function() {
    var urls = [
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tURU80N1gxRFFJQ0FTVzcyV0pWMjRGSEtUVC4u',
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tUQTRNVldYMzE5NFFCWEUyVjROMkZZNERCVy4u',
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tUMjNOSElPSlNNMkkxNjBSQUNZVU4wUDFEOC4u',
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tUNVpVQ0xMRUkzUzlQT0pUMDVRV0VHNTNYRS4u'
    ];
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
};
