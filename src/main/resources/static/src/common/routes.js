lmsApp.config(["$routeProvider", function($routeProvider){
	return $routeProvider.when("/", {
		redirectTo: "/home"
	}).when("/home", {
		templateUrl: "home.html"
	}).when("/admin", {
		templateUrl: "admin.html"
	}).when("/crud", {
		templateUrl: "crud.html"
	}).when("/author", {
		templateUrl: "author.html"
	}).when("/authorpage", {
		templateUrl: "authorpage.html"
	}).when("/bookpage", {
		templateUrl: "bookpage.html"
	}).when("/addbookpublisher", {
		templateUrl: "addbookpublisher.html"
	}).when("/addbookauthor", {
		templateUrl: "addbookauthor.html"
	}).when("/addbookgenre", {
		templateUrl: "addbookgenre.html"
	}).when("/genrepage", {
		templateUrl: "genrepage.html"
	}).when("/publisherpage", {
		templateUrl: "publisherpage.html"
	}).when("/borrowerpage", {
		templateUrl: "borrowerpage.html"
	}).when("/loanpage", {
		templateUrl: "loanpage.html"
	}).when("/addauthor", {
		templateUrl: "addauthor.html"
	}).when("/borrower", {
		templateUrl: "borrower.html"
	}).when("/checkin", {
		templateUrl: "checkin.html"
	}).when("/checkout", {
		templateUrl: "checkout.html"
	}).when("/librarian", {
		templateUrl: "librarian.html"
	}).otherwise({redirectTo:'/'});
}])