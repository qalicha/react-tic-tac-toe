import {useState,useEffect} from 'react'


function Game(){
    const[play,setPlay]=useState(['','','','','','','','','']);
    const [playerTurn, setplayerTurn] = useState('X');
    const [winner, setWinner] = useState('');
    const [winning, setWinning] = useState(false);

    const winningCombination=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
     ]
     useEffect(() => {

        let arrX=[]
        let arr0=[]
        arrX=play.reduce(function(a, e, i) {
            if (e === 'X')
                a.push(i);
            return a;
        }, []); 
        arr0=play.reduce(function(a, e, i) {
            if (e === '0')
                a.push(i);
            return a;
        }, []); 
        
        checkWinner(arrX,winningCombination)
        checkWinner(arr0,winningCombination)
      }, [play])
    function handleClick(e){
        let btnId=Number(e.target.id)
        e.target.classList.add('disabled')
       

        const newPlay=play.map((c,i)=>{
            
            if(i===btnId){
                 
                return c=playerTurn
                }
            else{
                return c
            }
        })
        setPlay(newPlay)  
        
        
        setplayerTurn(playerTurn=== 'X' ? '0' : 'X');
        
        document.getElementById(btnId).innerText=playerTurn
        // checkWinner(arr,winningCombination)
}

function resetGame(){
    setplayerTurn(playerTurn=== 'X' ? '0' : 'X');
    setPlay(['','','','','','','','',''])
    setWinning(false)
    let data=document.querySelectorAll('.btn')
         data.forEach((el)=>{
            el.classList.remove('disabled')
            el.innerText=''
        })
}
function checkWinner(arr,target){
    let win= target.map((targetArr) => {
        return targetArr.every(v => arr.includes(v));
      });
    let winner=win.includes(true)
    if(winner){
        setWinner(playerTurn==='X'?'0':'X')
        setWinning(true)
        let data=document.querySelectorAll('.btn')
         data.forEach((el)=>{
            el.classList.add('disabled')
        })
    }
   
     
}
 
    return(
        
        <div className='container'>
            <div>
                <h1>Tic Tac Toe</h1>
            <div className="board">
           <button className='btn' id='0' onClick={handleClick}></button>
           <button className='btn' id='1' onClick={handleClick}></button>
           <button className='btn' id='2' onClick={handleClick}></button>
           <button className='btn' id='3' onClick={handleClick}></button>
           <button className='btn' id='4' onClick={handleClick}></button>
           <button className='btn' id='5'  onClick={handleClick}></button>
           <button className='btn' id='6' onClick={handleClick}></button>
           <button className='btn' id='7' onClick={handleClick}></button>
           <button className='btn' id='8' onClick={handleClick}></button>
        </div>
        <p>{play.includes('')&&!winning ? `${playerTurn}'s turn`:play.includes('')&&winning?`${winner} wins`:!play.includes('')&&winner?`${winner} wins`:`game over` }</p>
        <button className='reset-btn' onClick={resetGame}>Reset</button>

            </div>
        </div>
        
       
        
    )
}
export default Game