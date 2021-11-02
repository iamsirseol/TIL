## ⚠️ zsh: command not found: nvm (macOS M1 user)

<br>

> nvm을 설치하기 위해서는 아래 두가지 방법이 있다. <br>
아래의 두가지 중 하나의 스크립트를 터미널창에 입력해야 한다. *(brew, wget 설치 완료된 상태)*
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
```
```js
위와 같이 설치를 한 후 터미널을 껏다가 다시키면 nvm을 사용이 가능한데 버전 확인을 위해

nvm --version // 이 커맨드를 사용해 보았다.
zsh: command not found: nvm // 그 때 나오는 이 메세지

'zsh: command not found: nvm' 이 메세지가 나온다면 
1. ~/.bash_profile
2. ~/.zshrc
3. ~/.profile
4. ~/.bashrc
이 네개의 프로필 파일에 소스가 없기 때문이라고 한다.
```
> 해결방법은 다음과 같다.
1. 다음 명령어를 입력한다.
```
nano ~/.zshrc
```
2. 입력을 하면 여러줄의 소스라인들이 보이는데 스크롤을 가장 밑으로 내려서 다음의 소스를 추가한다.
```js
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```
3. 완료
```
nvm --version // 버전을 다시 확인해 본다.
```