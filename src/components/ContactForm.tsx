import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string()
    .trim()
    .min(2, { message: "Nome deve ter pelo menos 2 caracteres" })
    .max(100, { message: "Nome deve ter no máximo 100 caracteres" }),
  email: z.string()
    .trim()
    .email({ message: "Email inválido" })
    .max(255, { message: "Email deve ter no máximo 255 caracteres" }),
  phone: z.string()
    .trim()
    .min(10, { message: "Telefone inválido" })
    .max(20, { message: "Telefone deve ter no máximo 20 caracteres" })
    .regex(/^[0-9\s\-\(\)\+]+$/, { message: "Telefone deve conter apenas números" }),
  message: z.string()
    .trim()
    .min(10, { message: "Mensagem deve ter pelo menos 10 caracteres" })
    .max(1000, { message: "Mensagem deve ter no máximo 1000 caracteres" }),
});

type ContactFormValues = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    
    try {
      // Validate and encode data for WhatsApp
      const whatsappMessage = encodeURIComponent(
        `*Nova Mensagem de Contato*\n\n` +
        `*Nome:* ${data.name}\n` +
        `*Email:* ${data.email}\n` +
        `*Telefone:* ${data.phone}\n` +
        `*Mensagem:* ${data.message}`
      );
      
      const whatsappLink = `https://wa.me/5511999999999?text=${whatsappMessage}`;
      
      // Open WhatsApp
      window.open(whatsappLink, '_blank');
      
      // Show success toast
      toast({
        title: "Mensagem preparada!",
        description: "Você será redirecionado para o WhatsApp.",
      });
      
      // Reset form
      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-card rounded-2xl shadow-lg p-8 h-full">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">
          Entre em Contato
        </h3>
        <p className="text-muted-foreground">
          Preencha o formulário e entraremos em contato rapidamente
        </p>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Nome Completo *</FormLabel>
                <FormControl>
                  <Input 
                    placeholder="Seu nome" 
                    className="border-2 focus:border-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Email *</FormLabel>
                <FormControl>
                  <Input 
                    type="email"
                    placeholder="seu@email.com" 
                    className="border-2 focus:border-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Telefone *</FormLabel>
                <FormControl>
                  <Input 
                    type="tel"
                    placeholder="(11) 99999-9999" 
                    className="border-2 focus:border-primary"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-semibold">Mensagem *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Como podemos ajudar você?"
                    className="border-2 focus:border-primary min-h-[120px] resize-none"
                    {...field} 
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary hover:bg-primary-dark text-primary-foreground font-bold py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            {isSubmitting ? (
              "Enviando..."
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
