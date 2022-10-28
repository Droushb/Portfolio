    // -------   Mail Send ajax

     $(document).ready(function() {
        var form = $('#myForm'); // contact form
        var submit = $('.submit-btn'); // submit button
        var alert = $('.alert-msg'); // alert div for show alert message

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); // prevent default form submit

            $.ajax({
                url: 'mail.php', // form action url
                type: 'POST', // form submit method get/post
                dataType: 'html', // request type html/json/xml
                data: form.serialize(), // serialize form data
                beforeSend: function() {
                    alert.fadeOut();
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    alert.html(data).fadeIn(); // fade in response data
                    form.trigger('reset'); // reset form
                    submit.attr("style", "display: none !important");; // reset submit button text
                },
                error: function(e) {
                    console.log(e)
                }
            });
        });
    });
	
	
				var pixels = [
			  [0, 1, 0, 0, 0, 3, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 3, 0, 0, 0, 0],
			  [0, 0, 2, 0, 0, 3, 0, 0, 0, 0],
			  [4, 0, 2, 0, 0, 0, 0, 0, 0, 0],
			  [4, 0, 0, 0, 0, 0, 3, 0, 0, 0],
			  [4, 0, 2, 0, 1, 0, 3, 0, 2, 0],
			  [4, 0, 2, 0, 0, 0, 3, 0, 2, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
			  [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]
			];
			
			var clicked = [
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
			];

			$(document).ready(function(){
				$("#start").click(function(){
					for (let i = 0; i < 10; i++) {
						for (let j = 0; j < 10; j++) {
							 $("#demo").append('<button id="butb" onclick="FuncOnClick('+i+', '+j+')">'+i*1+j+'</button>');
							  }
						$("#demo").append('<br>');
					}			  
				});
			});

			$(document).ready(function(){
						$("#start").click(function(){
							$("#start").remove();
							$('#block').css("display", "inline-block");
						});
					});
					
			$(document).ready(function(){
						$("#reset").click(function(){
							$('button').css("background-color", "white");
						});
					});
					
			var clicks = 0;
			
			function FuncOnClick(x, y) {
				clicks += 1;
				document.getElementById("clicks").innerHTML = clicks;

				clicked[x][y] = 1;
				FuncFillBoat(x, y);
				
				var maxpix = x;
				var minpix = x;
				
				var clit = pixels[x][y];
					count=0
					if(clit==0){
						return;
					}
					for(i=x-clit-1; i<=x+clit-1; i++){
						if(i>=0 && pixels[i][y]==clit && clicked[i][y]==1){
							count++
							if(i<minpix){
								minpix=i
							}
							if(i>maxpix){
								maxpix=i
							}
							
						}
					}
					if(count==clit){
						FuncFillAround(maxpix, y);
						FuncFillAround(minpix, y);
					}
			}
			
				function FuncFillAround(x, y){
							for(i=x-1; i<=x+1; i++){
								for(j=y-1; j<=y+1; j++){
									FuncFillBoat(i, j);
								}	
							}
					
					
				}
				
				function FuncFillBoat(x, y){
					if(x<0 || y<0){
						return;
					}
				var clit = pixels[x][y];
				let num = x+''+y
				
					if(clit==4){
						$("button:contains("+num+")").css("background-color", "red");
					}else if(clit==3){
						$("button:contains("+num+")").css("background-color", "green");
					}else if(clit==2){
						$("button:contains("+num+")").css("background-color", "blue");
					}else if(clit==1){
						$("button:contains("+num+")").css("background-color", "yellow");
							
					}else{
						$("button:contains("+num+")").css("background-color", "black");
					}
				}	
				
				
				
				var letters = [
					{w:"агронОмія", a: 0},
					{w:"алфАвІт", a: 0},
					{w:"Аркушик", a: 0},
					{w:"асиметрІя", a: 0},
					{w:"багаторазОвий", a: 0},
					{w:"безпринцИпний", a: 0},
					{w:"бЕшкет", a: 0},
					{w:"блАговіст", a: 0},
					{w:"близькИй", a: 0},
					{w:"болотИстий", a: 0},
					{w:"борОдавка", a: 0},
					{w:"босОніж", a: 0},
					{w:"боЯзнь", a: 0},
					{w:"бурштинОвий", a: 0},
					{w:"бюлетЕнь", a: 0},
					{w:"вАги (у множині)", a: 0},
					{w:"вантажІвка", a: 0},
					{w:"веснЯнИй", a: 0},
					{w:"вИгода (користь)", a: 0},
					{w:"вигОда (зручність)", a: 0},
					{w:"видАння", a: 0},
					{w:"визвОльний", a: 0},
					{w:"вимОга", a: 0},
					{w:"вИпадок", a: 0},
					{w:"вирАзний", a: 0},
					{w:"вИсіти", a: 0},
					{w:"вИтрата", a: 0},
					{w:"вишИваний", a: 0},
					{w:"відвезтИ", a: 0},
					{w:"відвестИ", a: 0},
					{w:"вІдгомін", a: 0},
					{w:"віднестИ", a: 0},
					{w:"вІдомість (список)", a: 0},
					{w:"відОмість (популярність)", a: 0},
					{w:"вІрші", a: 0},
					{w:"віршовИй", a: 0},
					{w:"вітчИм", a: 0},
					{w:"гальмО ", a: 0},
					{w:"гАльма", a: 0},
					{w:"глядАч", a: 0},
					{w:"горошИна", a: 0},
					{w:"граблІ", a: 0},
					{w:"гуртОжиток", a: 0},
					{w:"данИна", a: 0},
					{w:"дАно", a: 0},
					{w:"децимЕтр", a: 0},
					{w:"дЕщиця", a: 0},
					{w:"де-Юре", a: 0},
					{w:"джерелО", a: 0},
					{w:"дИвлячись", a: 0},
					{w:"дичАвіти", a: 0},
					{w:"діалОг", a: 0},
					{w:"добовИй", a: 0},
					{w:"добУток", a: 0},
					{w:"довезтИ", a: 0},
					{w:"довестИ", a: 0},
					{w:"довІдник", a: 0},
					{w:"дОгмат", a: 0},
					{w:"донестИ", a: 0},
					{w:"дОнька", a: 0},
					{w:"дочкА", a: 0},
					{w:"дрОва", a: 0},
					{w:"експЕрт", a: 0},
					{w:"єретИк", a: 0},
					{w:"жалюзІ", a: 0},
					{w:"завдАння", a: 0},
					{w:"завезтИ", a: 0},
					{w:"завестИ", a: 0},
					{w:"зАвжди", a: 0},
					{w:"завчасУ", a: 0},
					{w:"зАгадка", a: 0},
					{w:"заіржАвілий", a: 0},
					{w:"заіржАвіти", a: 0},
					{w:"закінчИти", a: 0},
					{w:"зАкладка (у книзі)", a: 0},
					{w:"зАкрутка", a: 0},
					{w:"залишИти", a: 0},
					{w:"замІжня", a: 0},
					{w:"занестИ", a: 0},
					{w:"зАпонка", a: 0},
					{w:"заробІток", a: 0},
					{w:"зАставка", a: 0},
					{w:"зАстібка", a: 0},
					{w:"застОпорити", a: 0},
					{w:"звИсока", a: 0},
					{w:"здАлека", a: 0},
					{w:"зібрАння", a: 0},
					{w:"зобразИти", a: 0},
					{w:"зОзла", a: 0},
					{w:"зрАння", a: 0},
					{w:"зрУчний", a: 0},
					{w:"зубОжіння", a: 0},
					{w:"індУстрія", a: 0},
					{w:"кАмбала", a: 0},
					{w:"каталОг", a: 0},
					{w:"квартАл", a: 0},
					{w:"кИшка", a: 0},
					{w:"кіломЕтр", a: 0},
					{w:"кінчИти", a: 0},
					{w:"кОлесо", a: 0},
					{w:"кОлія", a: 0},
					{w:"кОпчений (дієприкметник)", a: 0},
					{w:"копчЕний (прикметник)", a: 0},
					{w:"корИсний", a: 0},
					{w:"кОсий", a: 0},
					{w:"котрИй", a: 0},
					{w:"крицЕвий", a: 0},
					{w:"крОїти", a: 0},
					{w:"кропивА", a: 0},
					{w:"кулінАрія", a: 0},
					{w:"кУрятина", a: 0},
					{w:"лАте", a: 0},
					{w:"листопАд", a: 0},
					{w:"літОпис", a: 0},
					{w:"лЮстро", a: 0},
					{w:"мАбУть", a: 0},
					{w:"магістЕрський", a: 0},
					{w:"мАркетинг", a: 0},
					{w:"мерЕжа", a: 0},
					{w:"металУргія", a: 0},
					{w:"мілімЕтр", a: 0},
					{w:"навчАння", a: 0},
					{w:"нанестИ", a: 0},
					{w:"напІй", a: 0},
					{w:"нАскрізний", a: 0},
					{w:"нАчинка", a: 0},
					{w:"ненАвидіти", a: 0},
					{w:"ненАвисний", a: 0},
					{w:"ненАвисть", a: 0},
					{w:"нестИ", a: 0},
					{w:"нІздря", a: 0},
					{w:"новИй", a: 0},
					{w:"обіцЯнка", a: 0},
					{w:"обрАння", a: 0},
					{w:"обрУч (іменник)", a: 0},
					{w:"одинАдцять", a: 0},
					{w:"одноразОвий", a: 0},
					{w:"ознАка", a: 0},
					{w:"Олень", a: 0},
					{w:"оптОвий", a: 0},
					{w:"осетЕр", a: 0},
					{w:"отАман", a: 0},
					{w:"Оцет", a: 0},
					{w:"павИч", a: 0},
					{w:"партЕр", a: 0},
					{w:"пЕкарський", a: 0},
					{w:"перевезтИ", a: 0},
					{w:"перевестИ", a: 0},
					{w:"перЕкис", a: 0},
					{w:"перелЯк", a: 0},
					{w:"перенестИ", a: 0},
					{w:"перЕпад", a: 0},
					{w:"перЕпис", a: 0},
					{w:"піалА", a: 0},
					{w:"пІдданий (дієприкметник)", a: 0},
					{w:"піддАний (іменник, істота)", a: 0},
					{w:"пІдлітковий", a: 0},
					{w:"пізнАння", a: 0},
					{w:"пітнИй", a: 0},
					{w:"піцЕрія", a: 0},
					{w:"пОдруга", a: 0},
					{w:"пОзначка", a: 0},
					{w:"пОмилка", a: 0},
					{w:"помІщик", a: 0},
					{w:"помОвчати", a: 0},
					{w:"понЯття", a: 0},
					{w:"порядкОвий", a: 0},
					{w:"посерЕдині", a: 0},
					{w:"привезтИ", a: 0},
					{w:"привестИ", a: 0},
					{w:"прИморозок", a: 0},
					{w:"принестИ", a: 0},
					{w:"прИчіп", a: 0},
					{w:"прОділ", a: 0},
					{w:"промІжок", a: 0},
					{w:"псевдонІм", a: 0},
					{w:"рАзом", a: 0},
					{w:"рЕмінь (пояс)", a: 0},
					{w:"рЕшето", a: 0},
					{w:"рИнковий", a: 0},
					{w:"рівнИна", a: 0},
					{w:"роздрібнИй", a: 0},
					{w:"рОзпірка", a: 0},
					{w:"рукОпис", a: 0},
					{w:"руслО", a: 0},
					{w:"сантимЕтр", a: 0},
					{w:"свЕрдло", a: 0},
					{w:"серЕдина", a: 0},
					{w:"сЕча", a: 0},
					{w:"симетрІя", a: 0},
					{w:"сільськогосподАрський", a: 0},
					{w:"сімдесЯт", a: 0},
					{w:"слИна", a: 0},
					{w:"соломИнка", a: 0},
					{w:"стАтуя", a: 0},
					{w:"стовідсОтковий", a: 0},
					{w:"стрибАти", a: 0},
					{w:"текстовИй", a: 0},
					{w:"течіЯ", a: 0},
					{w:"тИгровий", a: 0},
					{w:"тисОвий", a: 0},
					{w:"тім’янИй", a: 0},
					{w:"травестІя", a: 0},
					{w:"тризУб", a: 0},
					{w:"тУлуб", a: 0},
					{w:"украЇнський", a: 0},
					{w:"уподОбання", a: 0},
					{w:"урочИстий", a: 0},
					{w:"усерЕдині", a: 0},
					{w:"фартУх", a: 0},
					{w:"фаховИй", a: 0},
					{w:"фенОмен", a: 0},
					{w:"фОльга", a: 0},
					{w:"фОрзац", a: 0},
					{w:"хАос (у міфології: стихія)", a: 0},
					{w:"хаОс (безлад)", a: 0},
					{w:"цАрина", a: 0},
					{w:"цемЕнт", a: 0},
					{w:"цЕнтнер", a: 0},
					{w:"ціннИк", a: 0},
					{w:"чарівнИй", a: 0},
					{w:"черговИй", a: 0},
					{w:"читАння", a: 0},
					{w:"чорнОзем", a: 0},
					{w:"чорнОслив", a: 0},
					{w:"чотирнАдцять", a: 0},
					{w:"шляхопровІд", a: 0},
					{w:"шовкОвий", a: 0},
					{w:"шофЕр", a: 0},
					{w:"щЕлепа", a: 0},
					{w:"щИпці", a: 0},
					{w:"щодобовИй", a: 0},
					{w:"ярмаркОвий", a: 0}
				];
				
				var selectedWord;
				var selectedAnswer;
				var wordWithCapital;
				var lengthOfWord;
				var att = 0;
				var numberOfClick=0;
				var trueatt = 0;
				var trueatt1 = 0;
				var count=0;
				var quantitiOfWords;
				var mainQuantitiOfWords;
				var finalWord;
				let rand;
				
				
				document.getElementById('notif').readOnly = true;		
						
				$(document).ready(function(){
					$("#letsub").click(function(){clickMainBut();})	
				});
				
				$(document).ready(function(){
					$("#ranletter").click(function(){clickRandBut();})	
					rand = true;
				});
				
				$(document).ready(function(){
					$("#choose").click(function(){
						$("#prev").css("display", "inline-block");
						$('#block1').css("display", "none");
						$("button").remove();
						cleanArrayFromUnit();
						trueAttam();
						RandomWord();
						})
				});
				
				$(document).ready(function(){
					$("#clean").click(function(){
						att = 0;
						document.getElementById("Attem").innerHTML = att;
					})
				});
				
				$(document).ready(function(){
					$("#repeatLetter").click(function(){
						changingOfNotification();
						$("button").remove();
						cleanArrayFromUnit();
						RandomWord();
						trueAttam();
					})
				});
				
				function clickMainBut(){
					selectedWord = document.getElementById("lett").value;
					$("button").remove();
					$("#prev").css("display", "none");
					$('#block1').css("display", "inline-block");
					$('#repeatLetter').css("display", "inline-block");
					cleanArrayFromUnit();
					changingOfNotification();
					RandomWord();
				};
				
				function clickRandBut(){
					selectedWord = document.getElementById("lett").value;
					$("button").remove();
					$("#prev").css("display", "none");
					$('#block1').css("display", "inline-block");
					$('#repeatLetter').css("display", "none");
					cleanArrayFromUnit();
					changingOfNotification();
					RandomWordAll();
				};
				
				function main(b){
					numberOfClick=b+1;
					CreatingArray();
					FindAnswer();
					SomeAction();
					
				};
				
				function RandomWord(){
					var letterWords = [];
					for (let i = 0; i < letters.length; i++) {
						var firstWordLetter = letters[i]['w'].toLowerCase();
						if(firstWordLetter[0]==selectedWord.toLowerCase() && letters[i]['a']==0){
							letterWords.push(letters[i]['w']);
							quantitiOfWords = letterWords.length;
						}			
					}
					var randomNumber = Math.floor(Math.random() * (quantitiOfWords));
					finalWord = letterWords[randomNumber].toLowerCase();
					drawWord();
					wordWithCapital = letterWords[randomNumber];
					lengthOfWord = wordWithCapital.length;
					for (let p = 0; p < letters.length; p++) {
						if(letterWords[randomNumber]==letters[p]['w']){
							letters[p]['a']=1; 
							break; 
						}
					}
				}
				
				function drawWord(){
					let duz = ''
					let duzka = false;
					for(let b = 0; b < finalWord.length; b++){
						if (finalWord[b]==' ' || duzka){
							duzka = true;
							duz +=finalWord[b]
						}else{
							$("#word").append("<button onclick='main("+b+")'>"+finalWord[b]+"</button>");
						}
					}
					if(duz!=''){
						$("#word").append("<button  disabled>"+duz+"</button>");
					}
				}
				
				function FindAnswer() {
					var ch;
					for(i = 0, count=1, ch; i < lengthOfWord; ++i){
						ch = wordWithCapital.charAt(i);
						if(ch >= 'а' && ch <= 'я' || ch == '-' || ch == 'є' || ch == 'і' || ch == 'ї'){ 
							++count;
						}else{ 
							break;
						}
					}
				}	
				
				function SomeAction(){
						attam();
						if(numberOfClick==count){
							trueatt += 1;
							trueatt1 += 1;
							document.getElementById("TrueAttem").innerHTML = trueatt;
							document.getElementById("error1").innerHTML = '';
							$("button").remove();
							if(trueatt1 == mainQuantitiOfWords){
								document.getElementById("notif").value = 'Молодець, повтори цю літеру або вибери іншу';
								$("#notif").css("background-color", "#94F56A");
							}else if(rand){
								RandomWord();
							}else{
								RandomWord();
							}
						}else{
							let text1 = "Відповідь не правильна";
							document.getElementById("error1").innerHTML = text1;
							$("button").remove();
							drawWord();
						}
				}
				
				function CreatingArray(){
					var mainLetterWords = [];
					for (let i = 0; i < letters.length; i++) {
						var firstWordLetter = letters[i]['w'].toLowerCase();
						if(firstWordLetter[0]==selectedWord.toLowerCase()){
							mainLetterWords.push(letters[i]['w']);
							mainQuantitiOfWords = mainLetterWords.length;
						}			
					}
				}
				
				function changingOfNotification(){
					document.getElementById("notif").value = '';
					$("#notif").css("background-color", "#E0FEF2");		
				}
						
				function cleanArrayFromUnit(){
					for(let i = 0; i < letters.length; i++){
						letters[i]['a']=0;
					}
				}	
				
				function trueAttam(){
					trueatt1 = 0;
				}
				
				function attam(){
					att += 1;
					document.getElementById("Attem").innerHTML = att;
				}
				
				