import ContainerWhite from './containerwhite'
import { EXAMPLE_PATH } from '../lib/constants'
import { useTheme } from 'next-themes'

export default function Footer() {
  const { theme, setTheme } = useTheme()
  return (
    <footer className="bg-accent-1 border-t border-accent-2 ">
      <ContainerWhite>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Send someone you ♥️ a Laisee today.
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
          <a
              href={`https://t.me/laiseebot`}
              className="mx-3 bg-black hover:bg-white hover:text-black border border-black text-white font-bold py-3 px-12 lg:px-8 duration-200 transition-colors mb-6 lg:mb-0"
            >
              Send via Telegram
            </a>
            <a
              href={`https://twitter.com/sendlaisee`}
              className="mx-3 font-bold hover:underline"
            >
              <img src="/assets/icons/twitter.svg" alt="github" width="50" height="50" ></img>
            </a>
            
            <a
              href={`https://github.com/bitkarrot/laiseebot`}
              className="mx-3 font-bold hover:underline"
            >
              <img src="/assets/icons/github.svg" alt="github" width="50" height="50" ></img>
            </a>
            <a
              href={`mailto:send@laisee.org`}
              className="mx-3 font-bold hover:underline"
            >
              <img src="/assets/icons/email.svg" alt="github" width="50" height="50" ></img>
            </a>       
            <button
              className="mx-3 px-2 py-2 text-black dark:text-white bg-white dark:bg-black font-semibold rounded-full border border-black"
              onClick={() => {
                setTheme(theme === 'light' ? 'dark' : 'light')
              }}
              >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path></svg>
            </button>

          </div>          
        </div>
      </ContainerWhite>
    </footer>
  )
}
