export default function FZFPage({setisHomeVisible, setIsCuratedVisible, setIsManualVisible, setIsRandomVisible}) {
    return(
      <div class="p-8">
        <div class="flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 content-center centerDiv shadow-lg">
              <h1 class="mb-4 text-8xl center p-4">404 ERROR</h1>
              <h2 class="mb-4 text-4xl center p-4">This Page Doesn't Exist ♡૮₍ ˃ ⤙ ˂ ₎ა💢</h2>
              <p class="mb-4 text-2xl center p-4">An error appears to have occurred, please note the circumstances that led to the display of this page, report them to the devs, and then click the button below to return to the home screen</p>
              <button type="button" class= "SFbutton center p-8" onClick={() => {setisHomeVisible(true), setIsRandomVisible(false), setIsCuratedVisible(false), setIsManualVisible(false)}}><span style={{ fontWeight: 'bold' }}>Return</span></button>
        </div>
      </div>
    );
  }

