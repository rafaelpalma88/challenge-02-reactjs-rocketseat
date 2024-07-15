export function Home() {
  function handleCreateOrder() {
    console.log('criar pedido')
  }

  return (
    <div>
      Home
      <button onClick={handleCreateOrder}>Go to checkout</button>
    </div>
  )
}
