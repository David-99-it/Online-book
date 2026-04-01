
// Мой скрипт для моей книги
$(document).ready(function(){
    
    //при клике на кнопку с id answerFinishId срабатывает анонимная функция , которая делает не возможное возможным! Да! детка это так! не возможное возможным!
    $("#answerFinishId").click(function(){ // Start TEST
        
        //Создаем функцию для проверки конкретного выбора из ответа
        function answer(answer, nomer)
        {   
            //проверяем значение 
            if(answer == 'yes' || answer == 'no')
            {   
                // то выпольняем событие
                $("#MessDivYes").fadeIn(400);
                $("#idMyTest").fadeOut(0);
                       //Если она равна yes то присваеваем к переменной sms сообщение Правильно! 
                       if(answer == 'yes')
                           {
                            var sms = "Правильно!";
                           }
                       //Если она равна no то присваеваем к переменной sms сообщение Не правильно! 
                       if(answer == 'no')
                           {
                            var sms = "Не правильно!";
                           }
                       //выводим результат и сообщение   
                       $("#sms_" + nomer + "").text(sms);
            }
        }

        //Получаем значение из конкретного вапроса
        var answerN_1 = $("#radio_1 :checked").val();
        var answerN_2 = $("#radio_2 :checked").val();
        var answerN_3 = $("#radio_3 :checked").val();
        var answerN_4 = $("#radio_4 :checked").val();
        var answerN_5 = $("#radio_5 :checked").val();
        var answerN_6 = $("#radio_6 :checked").val();
        var answerN_7 = $("#radio_7 :checked").val();
        var answerN_8 = $("#radio_8 :checked").val();
        var answerN_9 = $("#radio_9 :checked").val();
        
        //Приминение функции на Правильно или Не правильно
        answer(answerN_1,1);
        answer(answerN_2,2);
        answer(answerN_3,3);
        answer(answerN_4,4);
        answer(answerN_5,5);
        answer(answerN_6,6);
        answer(answerN_7,7);
        answer(answerN_8,8);
        answer(answerN_9,9);
        
        //Проверка не пуста ли форма, то есть отмечен ли ходь один вариант из вопросов
        if(answerN_1  == 'notAnswer_1' && 
           answerN_2  == 'notAnswer_2' && 
           answerN_3  == 'notAnswer_3' && 
           answerN_4  == 'notAnswer_4' && 
           answerN_5  == 'notAnswer_5' && 
           answerN_6  == 'notAnswer_6' && 
           answerN_7  == 'notAnswer_7' && 
           answerN_8  == 'notAnswer_8' && 
           answerN_9  == 'notAnswer_9')
            {
                $("#ViewBackId").fadeIn(500);
                $("#idMyTest").fadeOut(0);
                $("#MessDivYes").fadeOut(0);
            }
        
       
        
        // Приминение функции расчета баллов
        answerInrView(answerN_1,answerN_2,answerN_3,answerN_4,answerN_5,answerN_6,answerN_7,answerN_8,answerN_9);    
        
        }); // End TEST 
  
    
  
}); // End ready
