// JavaScript Document<script>
$(function(){
    $('#contents div[id!="bg-2022"]').hide();
	$("bg-a").click(function(){
		$("#contents div").hide();
		$($(this).attr("href")).show();
		return false;
	});
});
	