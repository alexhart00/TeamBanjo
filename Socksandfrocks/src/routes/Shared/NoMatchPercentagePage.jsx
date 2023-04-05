export default function NoMatchPercentagePage({flag}) {
    return(
      <div class="p-8">
        <div class="grid gap-6 place-items-auto flex flex-wrap w-6/12 items-center p-8 bg-gray-100 border-gray-200 border-8 centerDiv shadow-lg ">
              <h1 class="text-4xl center">A Match Wasn't Found ┏༼ ◉╭╮◉༽┓</h1>
              <button type="button" class= "SFbutton center" onClick={() => {flag(false)}}><span style={{ fontWeight: 'bold' }}>Go Back</span></button>
        </div>
      </div>
    );
  }

