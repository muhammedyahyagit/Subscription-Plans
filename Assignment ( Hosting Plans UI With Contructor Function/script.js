function HostingPlan(name, price, features, support) {
    this.name = name;
    this.price = price;
    this.features = features;
    this.support = support;
}

var basicPlan = new HostingPlan(
    "Basic Plan",
    "$5/month",
    ["10GB Storage", "100GB Bandwidth", "1 Domain"],
    "Email Support"
);

var proPlan = new HostingPlan(
    "Pro Plan",
    "$15/month",
    ["50GB Storage", "500GB Bandwidth", "5 Domains"],
    "Email + Phone Support"
);

var businessPlan = new HostingPlan(
    "Business Plan",
    "$25/month",
    ["Unlimited Storage", "Unlimited Bandwidth", "Unlimited Domains"],
    "24/7 Support"
);

function selectPlan(planName) {
    var planDetails = {
        Basic: "$5/month",
        Pro: "$15/month",
        Business: "$25/month"
    };

    alert(`You have selected the ${planName} for ${planDetails[planName]}.`);
}
