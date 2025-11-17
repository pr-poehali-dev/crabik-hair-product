import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState<'catalog' | 'delivery'>('catalog');

  const products = [
    {
      id: 1,
      name: 'КРАБИК',
      subtitle: 'для волос',
      description: '2 штуки в наборе',
      price: '350 ₽',
      image: 'https://cdn.poehali.dev/files/49a0335c-8c0a-40d6-b57a-7e1951532a97.jpg',
    },
    {
      id: 2,
      name: 'КРАБИК',
      subtitle: 'для волос',
      description: '2 штуки в наборе',
      price: '350 ₽',
      image: 'https://cdn.poehali.dev/files/49a0335c-8c0a-40d6-b57a-7e1951532a97.jpg',
    },
    {
      id: 3,
      name: 'КРАБИК',
      subtitle: 'для волос',
      description: '2 штуки в наборе',
      price: '350 ₽',
      image: 'https://cdn.poehali.dev/files/49a0335c-8c0a-40d6-b57a-7e1951532a97.jpg',
    },
    {
      id: 4,
      name: 'КРАБИК',
      subtitle: 'для волос',
      description: '2 штуки в наборе',
      price: '350 ₽',
      image: 'https://cdn.poehali.dev/files/49a0335c-8c0a-40d6-b57a-7e1951532a97.jpg',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-secondary/30 to-white">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Крабики для волос
            </h1>
            <Button variant="outline" className="gap-2">
              <Icon name="ShoppingCart" size={20} />
              Корзина
            </Button>
          </div>
          
          <nav className="flex gap-6 mt-6 border-b">
            <button
              onClick={() => setActiveTab('catalog')}
              className={`pb-3 px-2 font-medium transition-all ${
                activeTab === 'catalog'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              Каталог
            </button>
            <button
              onClick={() => setActiveTab('delivery')}
              className={`pb-3 px-2 font-medium transition-all ${
                activeTab === 'delivery'
                  ? 'text-primary border-b-2 border-primary'
                  : 'text-gray-600 hover:text-primary'
              }`}
              style={{ fontFamily: 'Rubik, sans-serif' }}
            >
              Доставка
            </button>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {activeTab === 'catalog' && (
          <div className="animate-in fade-in duration-500">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Наши крабики
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-pink-50 to-purple-50">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {product.subtitle}
                    </p>
                    <p className="text-xs text-gray-500 mb-4" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {product.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {product.price}
                      </span>
                      <Button className="bg-primary hover:bg-primary/90">
                        В корзину
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'delivery' && (
          <div className="animate-in fade-in duration-500 max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Доставка и оплата
            </h2>
            
            <div className="space-y-6">
              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Truck" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Способы доставки
                      </h3>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Rubik, sans-serif' }}>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Курьерская доставка по Москве — 300 ₽
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Почта России — от 250 ₽
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          СДЭК — от 300 ₽
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Бесплатная доставка при заказе от 2000 ₽
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="Clock" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Сроки доставки
                      </h3>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Rubik, sans-serif' }}>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          По Москве — 1-2 дня
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          По России — 3-7 дней
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardContent className="p-8">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="bg-primary/10 p-3 rounded-full">
                      <Icon name="CreditCard" size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        Способы оплаты
                      </h3>
                      <ul className="space-y-2 text-gray-700" style={{ fontFamily: 'Rubik, sans-serif' }}>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Оплата картой на сайте
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Оплата при получении
                        </li>
                        <li className="flex items-center gap-2">
                          <Icon name="Check" size={16} className="text-primary" />
                          Банковский перевод
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-white mt-20 border-t">
        <div className="container mx-auto px-4 py-8 text-center text-gray-600" style={{ fontFamily: 'Rubik, sans-serif' }}>
          <p>© 2024 Крабики для волос. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
