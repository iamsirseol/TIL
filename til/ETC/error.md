## ⚠️ zsh: command not found: nvm (macOS M1)

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

참조
1. [nvm github](https://github.com/nvm-sh/nvm#installing-and-updating)
2. [블로그](https://dev.to/duhbhavesh/nvm-command-not-found-1ho)

<br>

___

## ⚠️Warning: Each child in a list should have a unique "key" prop.
```js
  {
      fetchedDiary.record.map((el) => 
          <>
              <ImageBox key={el.id} img={el.image} ></ImageBox>
              <ContentBox>{el.content}</ContentBox>
              <HashtagBox>{el.hashtag.split(', ').map((tag, idx) => 
                  <span key={idx * 10}>{`#${tag}`}</span>)}
              </HashtagBox>
          </>
      )
  }
```
> 프로젝트 간 위와같이 코드를 작성하였더니 key를 prop으로 전달해 주라는 경고문이 떴다. 분명히 `ImageBox`에 key값을 줬는데 오류가 뜬 이유를 찾아 보니<br>
> 최상위의 컴포넌트에 key값을 줘야한다고 하여 아래와 같이 수정하여 문제를 해결하였다. <br>

```js
  {
      fetchedDiary.record.map((el) => 
          <BOX key={el.id} >
              <ImageBox img={el.image} ></ImageBox>
              <ContentBox>{el.content}</ContentBox>
              <HashtagBox>{el.hashtag.split(', ').map((tag, idx) => 
                  <span key={idx * 10}>{`#${tag}`}</span>)}
              </HashtagBox>
          </BOX>
      )
  }
```

<br>

___

## ⚠️ERROR:  While executing gem ... (Gem::FilePermissionError) <br> You don't have write permissions for the /Library/Ruby/Gems/2.6.0 directory.
> 깃헙의 블로그를 생성하는 과정 중에서 `gem install bundler` 를 설치하기 위한 과정에 있었는데 위와 같은 에러가 발생했다.
> 해당 디렉토리의 Ruby/Gems 를 읽지 못하는 것으로 이해를 하였는데 중간중간 시간을 내어 검색을 해보니 아래 깃헙의 해결책을 찾을 수 있었다.
[검색결과](https://github.com/rbenv/rbenv/issues/1267) <br>

위 내용에 따라 아래와 같이 터미널에 입력을 해 주었다.
```
export GEM_HOME="$HOME/.gem"
```
> 이후 다시 `gem install bundler`을 해 주었을때 이상없이 설치가 완료가 되었다.




[README.md로 이동](../README.md)
