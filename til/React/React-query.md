# React-query

> 리액트쿼리는 서버에서 fetching해온 상태값을 비동기적으로 관리하는 라이브러다.

```js
 import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
 
 const queryClient = new QueryClient();
 
 export default function App() {
   return (
     <QueryClientProvider client={queryClient}> /* 리덕스와 같이 사용하는 공식과도 같음 */
       <Example />
     </QueryClientProvider>
   )
 }

  function Example() {
   const { isLoading, error, data } = useQuery('repoData', () =>
     fetch('https://api.github.com/repos/tannerlinsley/react-query').then(res =>
       res.json()
     )
   );
   // 처음 위와 같이 요청을 하면 isLoading은 data가 fetching이 완료될 때까지 true가 되어 로딩을 보여준다.
   // 후에 fetching이 이 완료가 되면 아래의 리턴되는 데이터들이 등장한다.
 
   if (isLoading) return 'Loading...';
 
   if (error) return 'An error has occurred: ' + error.message;
 
   return (
     <div>
       <h1>{data.name}</h1>
       <p>{data.description}</p>
       <strong>👀 {data.subscribers_count}</strong>{' '}
       <strong>✨ {data.stargazers_count}</strong>{' '}
       <strong>🍴 {data.forks_count}</strong>
     </div>
   )
 }

```

[README.md로 이동](../../README.md)