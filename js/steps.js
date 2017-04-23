/**
 * Created by zhangyw on 2017/4/23.
 */
$(function(){
    var index = 0;
    const steps = getSetps();//select all steps
    console.log("find "+ steps.length +" steps")
    showSteps(steps,index)
    $("#prew").click(function () {
        prew(steps,index)
    })
    $("#next").click(function () {
        next(steps,index)
    })

    /**
     * show next step
     */
    function next(){
        console.log("next",index)
        console.log(index<steps.length-1)
        if(index<steps.length-1){
            closeStep(steps,index)
            index++
            showSteps(steps,index)
        }
    }

    /**
     * show prew step
     */
    function prew(){
        console.log("prew")
        if(index>0){
            closeStep(steps,index)
            index--
            showSteps(steps,index)
        }
    }

    /**
     * get all step divs
     * @returns {jQuery|HTMLElement}
     */
    function getSetps(){
        return $(".steps div")
    }

    /**
     * show one step
     */
    function showSteps() {
        $(steps[index]).show()
    }

    /**
     * close one step
     */
    function closeStep(){
        $(steps[index]).hide()
    }
})