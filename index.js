navigate($(".sec-customer"));

$("#btnCustomerNav").click(() => navigate($(".sec-customer")));
$("#btnItemNav").click(() => navigate($(".sec-item")));
$("#btnOrderNav").click(() => navigate($(".sec-placeOrder")));

function navigate(location) {
    var sections = $("main>section");
    for (let i = 0; i < sections.length; i++) sections.eq(i).css('display', 'none');
    location.css('display', 'block');
}