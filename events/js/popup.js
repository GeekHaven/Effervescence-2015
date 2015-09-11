$('document').ready(function() {
	dataupdate();
	alink();
	popup();
});

function alink() {
	$('.proside input[type="radio"]').click(function() {
		address = $(this).val();
		var val = (parseInt(address)-1) * $(window).height();
		//console.log(val);
		$('*').animate({
			scrollTop:val
		},700);
    });
}

function popup() {
	$('.btn-info').click(function() {
        $('.popupbox, .proside').slideDown(1000);
		id = $(this).attr("id");
		dataupdate(id);
    });
	$('#closebutton').click(function() {
		$('.popupbox, .proside').slideUp(1000);
	});
}

function dataupdate(id) {
	var events = {
						"animequiz":{
								"EventSummary":"All Naruto, One Piece and DBZ fans, get going and be ready to live up to your fantasy and prove that you are the biggest anime freak!! Dattebayo!! \nOrganisers:<ol><li>Sahil Hindwani : 09412262064</li><li>Shivendra Mittal : 09721715920</li></ol>",
								"Guidelines":"Contestants are required to form a team of two in order to participate. There will one preliminary written round and five on stage rounds.",
								}
						/*"tugofwar":{
								"EventSummary":"The objective of the game is for each team to pull the rope along with the members of opposition team to their side. As soon as the second mark on the rope from the center red mark crosses over to center line, the team to pull the rope to their area wins the game. \nOrganizers : <ol><li>Sahil Hindwani : 09412262064</li><li>Shivendra Mittal : 09721715920</li></ol>",
												
								"EventDescription":"The game involves usage of single equipment i.e. a rope.There is a red mark made in the middle of the rope. This red mark on the rope needs to be at a perpendicular angle to the exact center point on the ground, before the commencement of the game. A white mark is made exactly 13 feet from the red mark on either sides of the rope. The game is won when either side with this white mark crosses the center point. There would be two teams who will win this competition one team will be of girls and other of the boys.The opponents to the boys will be boys and for girls will be girls",
								"Event ":"The game involves usage of single equipment i.e. a rope.There is a red mark made in the middle of the rope. This red mark on the rope needs to be at a perpendicular angle to the exact center point on the ground, before the commencement of the game. A white mark is made exactly 13 feet from the red mark on either sides of the rope. The game is won when either side with this white mark crosses the center point. There would be two teams who will win this competition one team will be of girls and other of the boys.The opponents to the boys will be boys and for girls will be girls",
								"Guidelines":"<ul><li>Each team can accommodate a maximum of 6 members plus one substitute</li><li>Boys compete against the boys and girls against the girls.</li><li>No amendments can be made after the team is registered i.e that particular team’s member cannot be changed.</li><li>The teams will start pulling the rope into their territory on the command of the referee</li><li>The center of the rope should align with the center marked on the ground</li><li>If a member of the team falls down that member is given a caution. Each team is allowed two cautions before getting disqualified.</li><li>There is a particular technique that needs to be applied while playing this game, if not then there will be a foul which can call in for disqualifications. For e.g. lowering your elbow below the knee level while pulling the rope is considered to be a foul and is called ‘locking’. Touching the ground for a longer period of time is also considered as a foul.</li></ul>"
						},
						"tvseries":{
						"EventSummary":"Organisers:<ul><li>ANINDYA MUKHARJEE : 9792661914</li><li>RAJAT SAXENA:8171359599</li>",
							
							"Guidelines":"<ol><li>QUIZ WILL BE BASED ON THE FOLLOWING TV SERIES ONLY</li><ul><li>GAME OF THRONES</li><li>BREAKING BAD</li><li>FRIENDS</li><li>BIG BANG THEORY</li><li>(SURPRISE ENTRY TO BE REVEALED LATER)</li></ul>	<li>	COME IN TEAM OF TWO WITH A FANCY TEAM NAME .</li><li>	WHOLE QUIZ WILL CONSIST OF A TOTAL OF 4 ROUND .</li><li>ROUNDS WILL INCLUDE A WRITTEN QUALIFIER AND SUBSEQUENT ROUNDS WILL BE AUDIO, VISUAL AND MCQ.</li><li>DECISION OF THE ORGANISERS WILL BE FINAL AND BINDING.</li></ol>",

							"EventDescription":"TO ALL TV SERIES FREAKS OUT THERE !!!  WE PROVIDE  YOU A GREAT PLATFORM TO PROVE YOURSELF AS THE BIGGEST TV SERIES MANIAC. COME WITH YOUR FRIENDS AND FULFILL YOUR COMPASSION TOWARDS THE MOST FAMOUS TV SERIES."
									
						},*/,
						
						
						"gullycricket": {
								"EventSummary":"Street cricket or gully cricket is a stripped-down version of the international sport of cricket.\nOrganisers:<ol><li>Namit Mishra:7570020165</li><li>Vipul Agrawal:7417704753</li><li>Sarthak Sharma:8826299812</li></ol>",
								"Guidelines": "<ul><li>Every teams must have 6 members.</li><li>Each match will be of 5 overs</li>.<li>Three consecutive beats will be considered as OUT.</li><li>If the ball hits boundaries without taking a tip on the ground ,it will be considered as OUT.</li><li>NO balls and WIDE balls will be considered as Extras.</li><li>Positively four of your players should be bowling(at least one over each).</li><li>The height of the ball should be below chest.</li><li>There will be no run for byes.</li><li>Umpire’s decision will be considered as the last decision.</li><li>Rest other rules for scoring and run will be detailed at the venue.</li></ul>"
								},
								
						"silverscreen": {
							"EventSummary":"Organizers:<ol><li>Prateek Agarwal: +91 9560622441</li><li>Yash Jain : +919179185350</li><li>Sugandh Sagar : +91 8562986762</li></ol>",
							
							"EventDescription":"For all the movie maniacs out there, we present you Silver Screen, the ultimate movie mela! Watch all your favourite movies 24x7 in surround sound with your friends and partners."	
						},
						
						/*"photobooth": {
							"EventSummary":"Organizers:<ol><li>NAVEEN KUMAR SHUKLA: +91 7376 41 5693</li><li>RUDRAKSHA GUPTA: +91 9986 33 8914</li></ol>",
							"EventDescription":"Do props excite you? Do frames amaze you? Or maybe you like making funny faces, be it a duck face, pout or perhaps even a poker face while posing for photographs? Then “Photobooth” is the event for you. Brace yourselves for you are going to have one hell of a time at Effe'15.  "	
							"Guidelines":"Register in groups of two or more to participate in the event. Entrants must have a valid contact number and email address. Incomplete, illegible, false, deceptive or garbled entries are not eligible. The registration links and a detailed list of rules and regulations will be floated soon for all you enthusiasts. "	
						},*/
						
						
						"roadies":{
							"EventSummary":"\nOrganizers:<ol><li>Abhinav Mishra: 8052586522</li><li>Ankush Jangid: 8756352043</li></ol>",	
							"EventDescription":"Remake of the popular TV show, Roadies is not where you'll score brownie points if you just sing or dance. It is not some talent hunt contest where a shimmy-shake or a dance move or two will help you win. We are not looking for some gifted idols here. This is a battle that will test your brawn and wits until there are none left. This is where you leave that \"I'm so cool\" attitude at home. The journey is full of interesting tasks and if you've already accepted defeat and thinking of calling it quits, why don't you send your enemies instead, we'll do the dirty job for you. So if you think you have the guts to survive in this game that requires a never-say-die spirit, then Come and be a part of IIIT-A Roadies and experience the real thing.",
							"Guidelines":"<ul><li>The selection of Roadies will be on the basis of Personal Interview. </li><li>Certain tasks would have to be performed which will test you physically as well as mentally. </li><li>The winner will be awarded suitable prizes (goodies or cash prize) to be announced later.</li><li>From selecting a candidate to disqualifying him/her, every decision made by the judges would be final.</li></ul>"
						},
						
						"cricketquiz":{
							"EventSummary":"India is a country of cricket fanatics. So take a shot at our quiz and check where you stand.\nOrganizers : ol><li>Ajay Pilaniya:9783123208</li><li>Arjit Gupta:8826367723</li></ol>",
							"Guidelines":"<ul><li>cricket quiz will consist of four rounds and will be a team event(2 members).</li><li>First round will be MCQ based.</li><li>In second round a set of images will be shown and questions will be asked related to the images.</li><li>In third round there will be questions related to video clips.</li><li>The last and the final round will be a surprise.</li><li>Decision of the organizers will be final and binding.</li><li>Use of mobile phones at the time of participation is not allowed.</li> <ul>"

						},
						
						"balloonfight":{
							"EventSummary":"Burst the balloon tied to your opponent’s leg while saving the one tied to your leg. Participate in a group of 5.Organizers:<ol><li>Yash Sharma:9169429656</li><li>Ujjain Bana:9829726339 </li><li>Ajay Saini:8948218850</li></ol>",
							"EventDescription":"A balloon will be tied to each leg of every participant.  Players will try to burst balloons tied to the players of the opposite teams while trying to save balloons of their teammates while remaining in the boundary circle. A player will have to exit the circle if his both balloons are burst. In each match, time taken by a team to burst all the balloons of the opponent team will be noted down. Winners will be decided on the basis of this time. ",					
							"Guidelines":"<ul><li>Teams will consist of five members each.</li><li>If any participant will cross the boundary circle, he/she will be disqualified and the team will have to continue with remaining players.</li><li> If any player tries to use his/her hands then he will be disqualified from the team.</li><li>If any player found using unfair means then whole team will be disqualified.</li><li>The decision of the organisers will be final in all cases.</li></ul>"
						},
						
						
						"bookcricket":{
							"EventSummary":"Arguably the most favourite game played by students during 'free period' or during class by 'back-benchers.'Organizer: <ul><li>Ashish Reddy : 8127643176</li></ul>",
							"EventDescription":"A timepass game played in school involving a large book being opened randomly, and artificial cricket scores constructed through a sequence of rules.",
							"Guidelines":"<ul><li>Each team should have 2 players.</li><li>Each match will be of 5 overs and each team gets 10 wickets(wickets can be divided among teammates randomly).</li><li>The runs are scored by flipping the book open at random and    the last digit of the right-side (even-numbered) page is counted as  the number of runs scored.Scoring pattern :\n0 = Out]n2,4,6 = 2,4,6 runs respectively\n8 = no-ball(no extra runs)Win a FREE HIT for scoring 3 sixes in a row!!</li></ul>"
						},
						
						"bollywoodtambola":{
							"EventSummary":"All of us are accompanied with bollywood movies encompassing all the flavours of emotion and  at times we were scolded for our passion towards bollywood movies...!!But now its time to recollect all  your passion at bollywood movies.Organizers:<ol><li>Apurva Gupta:7376351934</li><li>Vishal Chauhan:9457753859</li><li>Laxmi  Kumari:8176831812</li></ol>",
							"EventDescription":"BOLLYWOOD TAMBOLA...delves into the world of Bollywood. Its an interactive quizzing  extravaganza that would test your knowledge about bollywood movies, songs, dialogues, actors and much more. Stuffed with spicy flavours of  movies, this event will take you to another level of fun, frolic and excitement. If garnished with perfect ratio of speed, knowledge and co-ordination, then you could experience  the ultimate  taste of victory. The event is divided into three rounds-ROUND 1:- MCQ type questionsIn  this team has to mark answers within given time limit.	ROUND 2:-It is further categorised into  <ol><li>Audio/video round   <li> 'Express youself'  wherein one contestant has to enact whatever is written in the chit  or  convey it by drawing the hints.</ol>\nROUND 3:-It is divided into1) Buzzer round	Rapid fire",
															
							"Guidelines":"<ul><li>The participants should form a team of two.<li>Negative marking would be there in last round.<li>For second round 10 teams will be shortlisted and finals will be played between 5 teams.<li>Use of unfair means will lead to disqualification</ul>"							
											},
											
											
						"admania":{
							"EventSummary":"Organizers:<ol><li>Shantal Raj:7054910846</li><li>Nidhi Bharti:7376240623</li><li>KS Abhinaya:9491006928</li></ol>",
	
							"EventDescription":"Are you an Ad-Maniac? Are you confident you know each and every ad on the TV? Here is your chance to test and prove yourself! This is for those who don't mute their television sets while the ads come.  Nothing is more efficient than creative advertising. Creative advertising is more memorable, longer lasting, works with less media spending, and builds a fan community...faster. Ad maniac should know how to advertise your product. If people aren’t going to talk about your product, then it’s not good enough. ",
								"guidelines":"<ol><li>The selection will be done on the basis of knowledge of ads and your creativity to advertise your own products.<li>Participants should form a team of two members.<li>There will be 3 rounds:<ul><li>ROUND I : This will be a buzzer round. You need to answer some questions based on the ads</li><li>ROUND II: This will comprise of an audio and visual round.</li><li>ROUND III: Here you need to advertise any given random product within at most  1 minute .</li></ul><li>The winner will be awarded suitable prizes which will be announced later.	</li><li>Any decision made by the judges during the contest will be taken as final.</li></ol>"

									},
									
						"armwrestling":{
							"EventSummary":"Organizers:<ol><li>Namit  Mishra:7570020165</li><li>Abhinav Mishra:8052586522</li></ol>",
							"EventDescription":"Arm wrestling “ a game of strength, power  and stamina. For those who want to test their physical and mental limits. It may be played from one hand but everything from your sitting style to your hand grabbing  style matters here.This event aims to find the best in this art , where brute is not only thing that matters.",				

							"Guidelines":"<ul><li>The competitors shoulders must be square to the table before the match is started.</li><li>The competitors shoulders may not be less than a fist distance away from their hands at the start.</li><li>All starts will be a 'Ready.....Go' . The cadence will vary. </li><li> All participants have to put their elbow inside a circle made on the table.</li><li>For a match there are maximum of three rounds - 1st , 2nd and final round (if there is a draw).</li><li>For two participants with different strong hands there will be max two rounds . Who wins in less time will be winner.</li><li>Judges decision will be final.</li></ul>"		
										},			
						
						"bquiz":{
							"EventSummary":"Organizers:<ol><li>Brijesh Kumar Awasthi : 8423673794, <li>Shweta Agarwal : 9984950472</li></ol>",
							"EventDescription":"Business is a game, played for stakes, and you’re in competition with experts. If you want to win, you have to learn to be the master of the game. You are not entitled to your opinion. You are entitled to your informed opinion. No one is entitled to be ignorant.",				
							"Guidelines":"<ul><li> Team must consist of 3 members.<li> Participant must have their University ‘I card’.</li><li>Any use of electronic gadgets is strictly prohibited.</li></ul>"
						},
						
						"basketball":{
							"EventSummary":"Organizers:<ol><li>MAYANK GOYAL : 8173966724</li><li>ADITYA  AGARWAL :9838234605</li></ol>",
							"EventDescription":"HALF COURT BASKETBALL!!!",
							"Guidelines":"<ul><li> Each team shoul have exactly 3 players.</li><li>Total playing time will be 10 minutes(2 halves of 5 minutes each).<li> There will be a break of  2 minutes in between.<li>Each basket will be counted as one point.<li> For every Personal Foul by a team,opposite team will be awarded a free throw.<li> After a made goal or free throw (except for technical or unsportsmanlike fouls and team fouls 10 or more),play restarts with a player from the non-scoring team taking the ball directly under the basket and then dribbling or passing it to a point behind the arc. The defense is not allowed to play for the ball inside the block/charge semi-circle under the basket. <li> In case of a tie, free throws will be provided.<li> Team members are required to wear same colour T-shirts.<li> Shoes are compulsory.<li> Each team is required to report 10 minutes prior to their match.</li></ul>"	
		
						},
						
						"konqueror":{
							"EventSummary":"<ol><li> Amritesh Singh: 7897432438 </li><li>Shaiwal Sachdev:8052418833</li></ol> ",
							"EventDescription":"Ahoy comrades! This is an online treasure hunt event where you have to fight for the ultimate crown and solve all the questions to win the grand prize.",
							"Guidelines":"<ul><li>	The duration is of 18 hours. <li>Registration is mandatory. <li>Each correct answer takes you to the next level. <li>There is no negative marking so \"Keep Guessing\". <li>Every clue will lead you to a website or some specific word on that website.<li>Any participant found indulging in unfair means will be disqualified immediately. The final discretion lies with the organisers.<li>All answers will be in lowercase.<li>If an answer consists of multiple words, write the answer without spaces between the words. For example, if an answer is “the lord of the rings”, then the answer will be written as “thelordoftherings”.<li>If an answer contains numbers, each number has to be written separately. For example, if an answer is “786”, it will have to be written as “seveneightsix”.<li>In case of a site having different forms as per nation, the Indian version would be considered. <li>Hints will be provided time to time on our Facebook page.</UL>"
											
						},
						
						"stegolica":{
							"EventDescription":"“Come in close, because the closer you look the less you see”. Hiding and concealing information is not a new thing. From Galileo to Leonardo da Vinci, everyone has done it in their work. Do you know what is more fun than concealing?? Yes, you guessed it right. Its the art of finding out the concealed information. And if you are one of those who love such stuffs, then stegolica is just the event for you. Stegolica is an online event of steganography or the art of hiding information in various forms.",
							"Guidelines":"<ul><li>It will be an 8 hours event.</li><li>There will be 15-20 questions. Each question will have some data which contains some hidden information. The data maybe an image, a video, an audio or anything. You need to find the information from this to answer the question.<li>	You can move the next question only after answering the present question.<li>The one who completes all the questions the fastest will be the winner. And by fastest, I mean the average time of answering all the questions from the start of the event will be considered.<li>In case of any discrepancies, the MOD’s decision will be final. Because here MOD is the GOD.</ul>"	
						},
						
						"paanipurijunction":{
							"EventSummary":"<ol><li> Bharat Gupta:+919045907587</li><li>Krishna Kumar: +917843877404</li><li>Aditya Kumawat: +919509115382</li></ol>",
							"EventDescription":"Get ready to smack the most delicious and famous Indian dish “PAANIPURI”!!  Show your zest and mania for golgappe by drubbing other fanatics and turn into ZEALOT of paanipuri. ",
							"Guidelines":"<ul><li>It is NOT a team game.<li>The participant who eats maximum number of paanipuri in 1 minute wins the game.<li>Prizes will be distributed for winner in every 15 slot, Grand prize will be given to the winner of game.<li>In all cases, decision of organizers will be considered final.</ul>"	
						},
						
						"lightscameraandaction":{
							"Events Description":"About: As this EFFE has Bollywood theme, this event will give you a chance to show all your talents and skills related to Bollywood.Performances includes:<ul><li>Honest bollywood movie reviews<li>Surprise ending of Bollywood movie<li>Mimicry <li>Enacting any scene from a Bollywood movie</ul>",
							"Guidelines":"<ul><li>This is a two-days event including a number of interesting rounds.<li>You can participate with a team of 2 members.<li>If required, teams may be asked to make videos</ul>"
											
															
						},
						
						"chinatown":{
							"EventSummary":"<ol><li>Abhishek Deora</li><li> medozonuo</li></ol>",
							"EventDescription":"This Effe China Town brings to you a some very exciting events! Raise the stakes, put on your pokerface and set the scene for an unforgettable casino experience. So be ready and gamble to galore. All are invited! Or why not just follow your instincts? Do your calculations, make sensible guesses or may be get your own octopus Paul to bid on any contestant or team which you think has the potential of winning some event . If the team/contestant you bid on wins , then you have a chance of making loads of money . So, what if you can't do the ramp walk , what if you can't play street soccer , what if you are not a gamer, you can still win money.",
							"Guidelines":"<ul><li>This is NOT a team participation. Each game will consist of 5-10 players. </li><li>The games follows their own regular rules.</li><li>If there are no dealers already present, any participant, while still playing the game, will get the chance to be the dealer.<li> For an individual to play the game, he will have to buy in. Max and min buy-in amounts will announced only during the main event.</li></ul>Guidelines for Bidding:<ul><li>Events included : Ala Mode(Contestants or teams) , Street Soccer(teams and Best player), Gully cricket(teams), Gamer's  Asylum(Fifa ,Counter Strike, Split Second)(teams), Roadies(contestant), Basketball(teams), Tug of War(teams boys/girls), treasure Hunt(teams).<li>Minimum bid for all the events is Rs. 50<li> Bidding for every event listed above will close 30 minutes before the start of the event or the first match of the team  ( whichever case it may be ) . <li>Profit earned by the winners of each event will be calculated using the relation: Profit = ((total collection of that event - total bidding by winners)/number of winners)x(0.9)<li> Bid once made cannot be changed .<li> In case of any conflicts, the decision of the organizers will be final.</ul>"
						} 
			}			
			
	if (id === undefined) {
		$('.procontent #summary').html("To be updated.");
		$('.procontent #guidelines').html("To be updated");
		$('.procontent #description').html("To be updated.");
	} else {
		summary = events[id]['EventSummary'];
		guidelines = events[id]['Guidelines'];
		description = events[id]['EventDescription'];
		$('.prohead p').html(id);
		$('.procontent #summary').html(summary);
		$('.procontent #guidelines').html(guidelines);
		$('.procontent #description').html(description);
	}
}