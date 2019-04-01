function exercise2 (event) {

    var typeMessage = ( function ( velocity ) {
        let container = document.getElementById ( "demo" ) ?
            document.getElementById ( "demo" ) :
            document.querySelector(".result2").appendChild (
                document.createElement ( "h3" )
            )
        container.style = `color: magenta;`
        var index = 0
        return function ( message ) {
            var numb = index
            setTimeout (
                () => {
                    container.textContent += message[numb]
                }
           ,1000*velocity*numb) 
            index++ < message.length -1 ? arguments.callee (message) : null
        }
      })( 1 )

    typeMessage ( `Welcome to the hell` )

}