import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const services = [
    {
      icon: 'Wind',
      title: 'Чистка систем вентиляции',
      description: 'Профессиональная очистка вентиляционных каналов от пыли, грязи и отложений. Восстановление нормального воздухообмена.',
      gradient: 'from-primary to-secondary'
    },
    {
      icon: 'Settings',
      title: 'Техническое обслуживание',
      description: 'Регулярное ТО вентиляционного оборудования. Проверка работоспособности всех узлов и систем.',
      gradient: 'from-secondary to-accent'
    },
    {
      icon: 'Search',
      title: 'Диагностика систем',
      description: 'Полная проверка состояния вентиляции. Выявление проблем и неисправностей на ранних стадиях.',
      gradient: 'from-accent to-primary'
    },
    {
      icon: 'FileText',
      title: 'Замеры и смета бесплатно',
      description: 'Выезд специалиста, замеры и составление подробной сметы работ абсолютно бесплатно.',
      gradient: 'from-primary via-secondary to-accent'
    }
  ];

  const advantages = [
    { icon: 'CheckCircle2', text: 'Работа на результат' },
    { icon: 'FileCheck', text: 'Договор подряда от физ.лица' },
    { icon: 'MapPin', text: 'Выезд по Темрюку и району' },
    { icon: 'Handshake', text: 'Долгосрочное сотрудничество' },
    { icon: 'Zap', text: 'Быстрое выполнение заявок' },
    { icon: 'Award', text: 'Гарантия качества' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-blue-50/30 to-purple-50/30">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-secondary to-accent py-20 px-4">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4xIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Icon name="Wind" className="text-white" size={20} />
              <span className="text-white font-semibold">Профессиональное обслуживание</span>
            </div>
            
            <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Чистка и обслуживание<br />
              <span className="text-white/90">вентиляционных систем</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
              Работа на результат в Темрюке и Темрюкском районе. Договор подряда. Замеры и смета бесплатно.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать звонок
              </Button>
              
              <Button 
                size="lg" 
                variant="outline" 
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all duration-300 hover:scale-105"
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Icon name="ArrowDown" className="mr-2" size={20} />
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр работ по обслуживанию вентиляционных систем
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-2xl transition-all duration-500 border-2 hover:border-primary/20 overflow-hidden animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-br ${service.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon name={service.icon as any} className="text-white" size={28} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl font-heading mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base leading-relaxed">
                        {service.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              О компании
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Надежный партнер в обслуживании вентиляционных систем
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <Card 
                key={index} 
                className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-primary/30 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="pt-8 pb-8">
                  <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary to-secondary shadow-lg mb-4">
                    <Icon name={advantage.icon as any} className="text-white" size={32} />
                  </div>
                  <p className="font-semibold text-lg text-foreground">{advantage.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-br from-white to-primary/5 border-2 border-primary/20 animate-fade-in-up">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="p-5 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-xl">
                    <Icon name="Building2" className="text-white" size={40} />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-2xl font-bold mb-3">Работаем с физическими и юридическими лицами</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Мы предлагаем как разовые услуги по чистке и обслуживанию, так и долгосрочные контракты. 
                    Готовы подписать договор подряда от физического лица к ООО или ИП.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                      <Icon name="MapPin" className="text-primary" size={18} />
                      <span className="font-semibold text-sm">Темрюк и район</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-secondary/10 px-4 py-2 rounded-full">
                      <Icon name="Calendar" className="text-secondary" size={18} />
                      <span className="font-semibold text-sm">Гибкий график</span>
                    </div>
                    <div className="inline-flex items-center gap-2 bg-accent/10 px-4 py-2 rounded-full">
                      <Icon name="DollarSign" className="text-accent" size={18} />
                      <span className="font-semibold text-sm">Бесплатный выезд</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
              Свяжитесь с нами
            </h2>
            <p className="text-xl text-muted-foreground">
              Оставьте заявку и мы перезвоним в течение 15 минут
            </p>
          </div>

          <Card className="shadow-2xl border-2 border-primary/20 animate-scale-in">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Ваше имя
                  </label>
                  <Input
                    placeholder="Иван Иванов"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="h-12 text-base border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Номер телефона
                  </label>
                  <Input
                    type="tel"
                    placeholder="+7 (999) 123-45-67"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    className="h-12 text-base border-2 focus:border-primary transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">
                    Сообщение
                  </label>
                  <Textarea
                    placeholder="Опишите вашу задачу или вопрос..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="text-base border-2 focus:border-primary transition-colors resize-none"
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white text-lg py-6 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <Icon name="Send" className="mr-2" size={20} />
                  Отправить заявку
                </Button>
              </form>

              <div className="mt-8 pt-8 border-t-2 border-dashed border-border">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Icon name="Phone" className="text-primary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Позвоните нам</p>
                      <p className="font-semibold text-foreground">Указано в объявлении</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-full bg-secondary/10">
                      <Icon name="MessageCircle" className="text-secondary" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Напишите нам</p>
                      <p className="font-semibold text-foreground">В сообщениях</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-gradient-to-r from-primary via-secondary to-accent text-white py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Wind" size={32} />
                <span className="font-heading text-2xl font-bold">ВентСервис</span>
              </div>
              <p className="text-white/80">
                Профессиональное обслуживание вентиляционных систем в Темрюке
              </p>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Услуги</h3>
              <ul className="space-y-2 text-white/80">
                <li>Чистка систем вентиляции</li>
                <li>Техническое обслуживание</li>
                <li>Диагностика систем</li>
                <li>Бесплатные замеры</li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading text-lg font-bold mb-4">Контакты</h3>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Темрюк и Темрюкский район</span>
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <span>Указано в объявлении</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ВентСервис. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
