export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      book_statuses: {
        Row: {
          status_id: number
          status_name: string
        }
        Insert: {
          status_id?: number
          status_name: string
        }
        Update: {
          status_id?: number
          status_name?: string
        }
        Relationships: []
      }
      books: {
        Row: {
          api_id: string
          average_rating: number | null
          book_id: string
          deleted_at: string | null
        }
        Insert: {
          api_id: string
          average_rating?: number | null
          book_id?: string
          deleted_at?: string | null
        }
        Update: {
          api_id?: string
          average_rating?: number | null
          book_id?: string
          deleted_at?: string | null
        }
        Relationships: []
      }
      comments: {
        Row: {
          comment_id: number
          comment_text: string
          created_at: string | null
          deleted_at: string | null
          user_book_id: number | null
        }
        Insert: {
          comment_id?: number
          comment_text: string
          created_at?: string | null
          deleted_at?: string | null
          user_book_id?: number | null
        }
        Update: {
          comment_id?: number
          comment_text?: string
          created_at?: string | null
          deleted_at?: string | null
          user_book_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "comments_user_book_id_fkey"
            columns: ["user_book_id"]
            isOneToOne: false
            referencedRelation: "user_books"
            referencedColumns: ["user_book_id"]
          }
        ]
      }
      user_book_statuses: {
        Row: {
          status_id: number | null
          user_book_id: number | null
        }
        Insert: {
          status_id?: number | null
          user_book_id?: number | null
        }
        Update: {
          status_id?: number | null
          user_book_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "user_book_statuses_status_id_fkey"
            columns: ["status_id"]
            isOneToOne: false
            referencedRelation: "book_statuses"
            referencedColumns: ["status_id"]
          },
          {
            foreignKeyName: "user_book_statuses_user_book_id_fkey"
            columns: ["user_book_id"]
            isOneToOne: false
            referencedRelation: "user_books"
            referencedColumns: ["user_book_id"]
          }
        ]
      }
      user_books: {
        Row: {
          book_id: string | null
          deleted_at: string | null
          personal_rating: number | null
          status: string | null
          user_book_id: number
          user_id: string | null
        }
        Insert: {
          book_id?: string | null
          deleted_at?: string | null
          personal_rating?: number | null
          status?: string | null
          user_book_id?: number
          user_id?: string | null
        }
        Update: {
          book_id?: string | null
          deleted_at?: string | null
          personal_rating?: number | null
          status?: string | null
          user_book_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_books_book_id_fkey"
            columns: ["book_id"]
            isOneToOne: false
            referencedRelation: "books"
            referencedColumns: ["book_id"]
          },
          {
            foreignKeyName: "user_books_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string | null
          billing_address: Json | null
          full_name: string | null
          id: string
          payment_method: Json | null
        }
        Insert: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id: string
          payment_method?: Json | null
        }
        Update: {
          avatar_url?: string | null
          billing_address?: Json | null
          full_name?: string | null
          id?: string
          payment_method?: Json | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      pricing_plan_interval: "day" | "week" | "month" | "year"
      pricing_type: "one_time" | "recurring"
      subscription_status:
        | "trialing"
        | "active"
        | "canceled"
        | "incomplete"
        | "incomplete_expired"
        | "past_due"
        | "unpaid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
