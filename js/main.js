// reveal password script
$(".reveal").on('click',function() {
    var $pwd = $(".pwd");
	var $lock = $(".reveal");
    if ($pwd.attr('type') === 'password') {
        $pwd.attr('type', 'text');
		$lock.attr('class', 'fas fa-unlock-alt reveal');
    } else {
        $pwd.attr('type', 'password');
		$lock.attr('class', 'fas fa-lock reveal');
    }
});