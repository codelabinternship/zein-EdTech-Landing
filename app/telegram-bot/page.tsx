import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, CheckCircle, HelpCircle, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function TelegramBotPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <header className="bg-[#010088] text-white">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1 space-y-6">
              <div className="flex items-center gap-4">
                <Image src="/logo.png" alt="ZEIN Logo" width={80} height={80} className="rounded-full bg-white p-2" />
                <h1 className="text-3xl md:text-5xl font-bold">ZEIN.UZ Telegram Bot</h1>
              </div>
              <p className="text-xl md:text-2xl">Интерактивные квизы для изучения различных предметов</p>
              <p className="text-lg opacity-80">
                Проверяйте свои знания и улучшайте результаты с нашим образовательным ботом
              </p>
              <div className="flex flex-row gap-4">
                <Button className="bg-[#7635E9] hover:bg-[#6525D9]">
                  <Link href="https://t.me/ZEIN_edtech_bot" target="_blank" className="flex items-center gap-2">
                    <MessageCircle size={18} />
                    Открыть бота
                  </Link>
                </Button>
                <Button variant="outline" className="text-white  border-white hover:bg-white/10">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Telegram Bot Preview"
                width={500}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">Возможности бота / Bot imkoniyatlari</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
            <p className="text-lg max-w-3xl mx-auto">
              Наш Telegram-бот предлагает множество функций для эффективного обучения и тестирования знаний
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <BookOpen className="text-white" />
                </div>
                <CardTitle>Разнообразные предметы</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Выбирайте из различных предметов для тестирования своих знаний. Каждый предмет содержит множество
                  вопросов разной сложности.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <HelpCircle className="text-white" />
                </div>
                <CardTitle>Интерактивные квизы</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Проходите тесты с вариантами ответов в удобном формате опросов Telegram. Получайте мгновенную обратную
                  связь по каждому вопросу.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-[#7635E9] flex items-center justify-center mb-4">
                  <CheckCircle className="text-white" />
                </div>
                <CardTitle>Детальные результаты</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  После завершения квиза получайте подробные результаты с указанием количества правильных ответов и
                  процентного соотношения.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">Как это работает / Bu qanday ishlaydi</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-[#7635E9] transform -translate-x-1/2"></div>

              {[
                {
                  title: "Запуск бота",
                  description: "Отправьте команду /start боту в Telegram, чтобы начать взаимодействие.",
                },
                {
                  title: "Выбор языка",
                  description: "Выберите предпочитаемый язык интерфейса: узбекский, русский или английский.",
                },
                {
                  title: "Выбор предмета",
                  description: "Выберите предмет, по которому хотите пройти тестирование.",
                },
                {
                  title: "Настройка квиза",
                  description: "Выберите уровень сложности и количество вопросов для теста.",
                },
                {
                  title: "Прохождение теста",
                  description: "Отвечайте на вопросы, выбирая правильный вариант из предложенных.",
                },
                {
                  title: "Получение результатов",
                  description: "После завершения теста получите детальные результаты и возможность пройти тест снова.",
                },
              ].map((step, index) => (
                <div key={index} className="relative flex items-start mb-8 md:mb-12">
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-[#7635E9] rounded-full flex items-center justify-center transform -translate-x-1/2">
                    <span className="text-white font-bold">{index + 1}</span>
                  </div>
                  <div
                    className={`ml-16 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12 md:ml-auto"}`}
                  >
                    <h3 className="text-xl font-bold text-[#010088] mb-2">{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#010088] mb-4">Демонстрация бота / Bot namoyishi</h2>
            <div className="w-20 h-1 bg-[#7635E9] mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle>Пример квиза по математике</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4 bg-gray-50">
                    <p className="font-bold mb-2">Вопрос 1: Чему равно 2+2?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                        <p>3</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#7635E9] mr-2"></div>
                        <p className="font-bold">4</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                        <p>5</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                        <p>6</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-green-600">✓ Правильный ответ: 4</p>
                  </div>

                  <div className="border rounded-lg p-4 bg-gray-50">
                    <p className="font-bold mb-2">Вопрос 2: Чему равно 5×5?</p>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                        <p>20</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-[#7635E9] mr-2"></div>
                        <p className="font-bold">25</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                        <p>30</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 mr-2"></div>
                        <p>35</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm text-green-600">✓ Правильный ответ: 25</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Результаты квиза</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="border rounded-lg p-6 bg-gray-50">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 rounded-full bg-[#7635E9] flex items-center justify-center mx-auto mb-4">
                      <span className="text-white text-2xl font-bold">80%</span>
                    </div>
                    <h3 className="text-xl font-bold">Отличный результат!</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Правильных ответов:</span>
                      <span className="font-bold">4/5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Всего вопросов:</span>
                      <span>5</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Процент выполнения:</span>
                      <span className="font-bold">80%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Время прохождения:</span>
                      <span>2 мин 15 сек</span>
                    </div>
                  </div>

                  <div className="mt-6 flex gap-4">
                    <Button className="bg-[#7635E9] hover:bg-[#6525D9] w-full">Пройти снова</Button>
                    <Button variant="outline" className="w-full">
                      В главное меню
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 text-center">
            <Button className="bg-[#7635E9] hover:bg-[#6525D9]">
              <Link href="https://t.me/ZEIN_edtech_bot" target="_blank" className="flex items-center gap-2">
                <MessageCircle size={18} />
                Попробовать бота
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Image src="/logo.webp" alt="ZEIN Logo" width={40} height={40} className="rounded-full bg-white p-1" />
              <span className="font-bold">ZEIN EDTECH</span>
            </div>
            <div className="flex gap-4">
              <Link href="/" className="text-gray-400 hover:text-white">
                Главная
              </Link>
              <Link href="/telegram-bot" className="text-gray-400 hover:text-white">
                Telegram Bot
              </Link>
              <Link href="https://t.me/ZEIN_edtech" className="text-gray-400 hover:text-white">
                Контакты
              </Link>
            </div>
            <p className="text-sm text-gray-400 mt-4 md:mt-0">
              © {new Date().getFullYear()} ZEIN EDTECH MCHJ. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
