import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>
          Su<span className="header__group-one">do</span><span className="header__group-two">ku</span>
        </h1>
        <h2>
          New Game
        </h2>
      </header>
      <div className="innercontainer">
        <section className="game">
          <table className="game__board">
            <tbody>
              <tr className="game__row">
                <td className="game__cell">8</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">2</td>
                <td className="game__cell"></td>
                <td className="game__cell">9</td>
                <td className="game__cell">1</td>
                <td className="game__cell"></td>
              </tr>
              <tr className="game__row">
                <td className="game__cell">2</td>
                <td className="game__cell">3</td>
                <td className="game__cell">4</td>
                <td className="game__cell">5</td>
                <td className="game__cell">1</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">7</td>
              </tr>
              <tr className="game__row">
                <td className="game__cell">7</td>
                <td className="game__cell">1</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">8</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">5</td>
                <td className="game__cell">4</td>
              </tr>
              <tr className="game__row">
                <td className="game__cell">6</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">1</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">3</td>
                <td className="game__cell"></td>
                <td className="game__cell">5</td>
              </tr>
              <tr className="game__row">
                <td className="game__cell">1</td>
                <td className="game__cell">8</td>
                <td className="game__cell">5</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">7</td>
                <td className="game__cell">2</td>
                <td className="game__cell"></td>
              </tr>
              <tr className="game__row">
                <td className="game__cell"></td>
                <td className="game__cell">4</td>
                <td className="game__cell"></td>
                <td className="game__cell">6</td>
                <td className="game__cell"></td>
                <td className="game__cell">2</td>
                <td className="game__cell">8</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
              </tr>
              <tr className="game__row">
                <td className="game__cell"></td>
                <td className="game__cell">6</td>
                <td className="game__cell">8</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">4</td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
              </tr>
              <tr className="game__row">
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">1</td>
                <td className="game__cell">6</td>
                <td className="game__cell">2</td>
              </tr>
              <tr className="game__row">
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell"></td>
                <td className="game__cell">4</td>
                <td className="game__cell"></td>
                <td className="game__cell">7</td>
                <td className="game__cell">5</td>
                <td className="game__cell">3</td>
                <td className="game__cell"></td>
              </tr>
            </tbody>
          </table>
        </section>
        <section className="status">
          <div className="status__difficulty">
            <span className="status__difficulty-text">Difficulty:&nbsp;&nbsp;</span>
            <select name="status__difficulty-select" className="status__difficulty-select">
              <option value ="Easy">Easy</option>
              <option value ="Medium" selected>Medium</option>
              <option value ="Hard">Hard</option>
            </select>
          </div>
          <div className="status__time">12:35
          </div>
          <div className="status__numbers">
            <div className="status__number">1</div>
            <div className="status__number">2</div>
            <div className="status__number">3</div>
            <div className="status__number">4</div>
            <div className="status__number">5</div>
            <div className="status__number">6</div>
            <div className="status__number">7</div>
            <div className="status__number">8</div>
            <div className="status__number">9</div>
          </div>
          <div className="status__actions">
            <div className="status__action-undo">
              <svg className="status__action-svg" height="512pt" viewBox="0 0 512 512" width="512pt" xmlns="http://www.w3.org/2000/svg"><path d="m154.667969 213.332031h-138.667969c-8.832031 0-16-7.167969-16-16v-138.664062c0-8.832031 7.167969-16 16-16s16 7.167969 16 16v122.664062h122.667969c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0" fill="hsl(213, 30%, 59%)"/><path d="m256 512c-68.351562 0-132.628906-26.644531-180.96875-75.03125-6.253906-6.25-6.253906-16.382812 0-22.632812 6.269531-6.273438 16.402344-6.230469 22.632812 0 42.304688 42.347656 98.515626 65.664062 158.335938 65.664062 123.519531 0 224-100.480469 224-224s-100.480469-224-224-224c-105.855469 0-200.257812 71.148438-224.449219 169.171875-2.132812 8.597656-10.75 13.824219-19.371093 11.714844-8.574219-2.132813-13.800782-10.796875-11.710938-19.371094 27.691406-112.148437 135.148438-193.515625 255.53125-193.515625 141.164062 0 256 114.835938 256 256s-114.835938 256-256 256zm0 0" fill="hsl(213, 30%, 59%)"/></svg>
              <p className="status__action-text">Undo</p>
            </div>
            <div className="status__action-erase">
            <svg className="status__action-svg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512.001 512.001"><path d="M505.922,476.567L285.355,256L505.92,35.435c8.106-8.105,8.106-21.248,0-29.354c-8.105-8.106-21.248-8.106-29.354,0L256.001,226.646L35.434,6.081c-8.105-8.106-21.248-8.106-29.354,0c-8.106,8.105-8.106,21.248,0,29.354L226.646,256L6.08,476.567c-8.106,8.106-8.106,21.248,0,29.354c8.105,8.105,21.248,8.106,29.354,0l220.567-220.567l220.567,220.567c8.105,8.105,21.248,8.106,29.354,0S514.028,484.673,505.922,476.567z" fill="hsl(213, 30%, 59%)"/></svg>
              <p className="status__action-text">Erase</p>
            </div>
            <div className="status__action-hint">
              <svg className="status__action-svg" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 432.4 432.4">
                <path d="M216.529,93.2c-61.2,0-111.2,50-111.2,111.2c0,32,14,62.8,37.6,83.6c17.6,17.6,16,55.2,15.6,55.6c0,2,0.4,3.6,2,5.2c1.2,1.2,3.2,2,4.8,2h102c2,0,3.6-0.8,4.8-2c1.2-1.2,2-3.2,2-5.2c0-0.4-2-38,15.6-55.6c0.4-0.4,0.8-0.8,1.2-1.2c23.2-21.2,36.8-51.2,36.8-82.4C327.729,143.2,277.729,93.2,216.529,93.2zM280.529,277.6c-0.4,0.4-1.2,1.2-1.2,1.6c-15.6,16.8-18.4,44.4-18.8,57.6h-88.4c-0.4-13.2-3.2-42-20-59.2c-21.2-18.4-33.6-45.2-33.6-73.6c0-54,43.6-97.6,97.6-97.6s97.6,43.6,97.6,97.6C313.729,232.4,301.729,259.2,280.529,277.6z" fill="hsl(213, 30%, 59%)"/>
                <path d="M216.129,121.6c-3.6,0-6.8,3.2-6.8,6.8c0,3.6,3.2,6.8,6.8,6.8c40.4,0,72.8,32.8,72.8,72.8c0,3.6,3.2,6.8,6.8,6.8c3.6,0,6.8-3.2,6.8-6.8C302.929,160.4,264.129,121.6,216.129,121.6z" fill="hsl(213, 30%, 59%)"/>
                <path d="M260.529,358.4h-88.8c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h88.4c9.6-0.4,17.2-7.6,17.2-16.8C277.329,366,269.729,358.4,260.529,358.4zM260.529,378h-88.8c-1.6,0-3.2-1.2-3.2-3.2s1.2-3.2,3.2-3.2h88.4c1.6,0,3.2,1.2,3.2,3.2S262.129,378,260.529,378z" fill="hsl(213, 30%, 59%)"/>
                <path d="M247.329,398.8h-62.4c-9.2,0-16.8,7.6-16.8,16.8s7.6,16.8,16.8,16.8h62.4c9.2,0,16.8-7.6,16.8-16.8C264.129,406,256.529,398.8,247.329,398.8zM247.329,418.4h-62.4c-1.6,0-3.2-1.2-3.2-3.2s1.2-3.2,3.2-3.2h62.4c1.6,0,3.2,1.2,3.2,3.2S248.929,418.4,247.329,418.4z" fill="hsl(213, 30%, 59%)"/>
                <path d="M216.129,60c4,0,6.8-3.2,6.8-6.8V6.8c0-3.6-3.2-6.8-6.8-6.8c-3.6,0-6.8,3.2-6.8,6.8v46.4C209.329,56.8,212.529,60,216.129,60z" fill="hsl(213, 30%, 59%)"/>
                <path d="M329.329,34.4c-3.2-2.4-7.2-1.2-9.2,1.6l-25.6,38.4c-2.4,3.2-1.6,7.6,1.6,9.6c1.2,0.8,2.4,1.2,3.6,1.2c2.4,0,4.4-1.2,5.6-3.2l25.6-38.4C333.329,40.8,332.529,36.4,329.329,34.4z" fill="hsl(213, 30%, 59%)"/>
                <path d="M134.929,83.6c1.2,0,2.4-0.4,3.6-1.2c3.2-2,4-6.4,2-9.6l-24.8-38.8c-2-3.2-6.4-4-9.6-2s-4,6.4-2,9.6l24.8,38.8C130.529,82.8,132.529,83.6,134.929,83.6z" fill="hsl(213, 30%, 59%)"/>
                <path d="M86.529,126l-40.4-22c-3.2-1.6-7.6-0.4-9.2,2.8c-2,3.2-0.8,7.6,2.8,9.2l40.4,22c1.2,0.4,2,0.8,3.2,0.8c2.4,0,4.8-1.2,6-3.6C90.929,132,89.729,127.6,86.529,126z" fill="hsl(213, 30%, 59%)"/>
                <path d="M395.729,106.8c-1.6-3.2-6-4.4-9.2-2.8l-40.8,22c-3.2,1.6-4.4,6-2.8,9.2c1.2,2.4,3.6,3.6,6,3.6c1.2,0,2.4-0.4,3.2-0.8l40.8-22C396.129,114.4,397.329,110,395.729,106.8z" fill="hsl(213, 30%, 59%)"/>
              </svg>
              <p className="status__action-text">Hint</p>
            </div>
            <div className="status__action-mistakes-mode">
              <label className="status__action-mistakes-mode-switch">
                <input type="checkbox" />
                <span className="status__action-mistakes-mode-slider"></span>
              </label>
              <p className="status__action-text">Mistakes Mode</p>
            </div>
            <div className="status__action-fast-mode">
              <label className="status__action-fast-mode-switch">
                <input type="checkbox" />
                <span className="status__action-fast-mode-slider"></span>
              </label>
              <p className="status__action-text">Fast Mode</p>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <p>&#169; 2020 Amith Raravi - source code on <a href="https://github.com/raravi/sudoku">Github</a></p>
      </footer>
    </div>
  );
}

export default App;
